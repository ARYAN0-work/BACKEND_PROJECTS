const User =require('../models/User')
const { StatusCodes } = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')
const jwt = require('jsonwebtoken')

const register =async(req,res)=>{
    const user = await User.create({ ...req.body })
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({
    user: { name: user.name },
    token,
  })
}

const login =async(req,res)=>{
    const {email,password} = req.body

//    if(!email||!password){
//        throw new BadRequestError('Plz provide email and password')
//    }
const user = await User.findOne({email})    
// compare password
if(!user){
    throw new UnauthenticatedError('Invalid creadential')
}
const isPasswordCorrect = await user.comparePassword(password)
if(!isPasswordCorrect){
    throw new UnauthenticatedError('Invalid Creadentials')
}

const token = user.createJWT()
res.status(StatusCodes.OK).json({user:{name:user.name},token}) // base functionality => just compare password using librarie using becrypt js  => if email and password have a little one word typo change invalid credentail will show 

  }


  // the reason why we setup email is here if wee remove password and line19 20 theres gonna throw and error which pass empty value => we are choosing to see the error over here its our preferance rather then in err handler 

module.exports ={
    register,
    login,
}
