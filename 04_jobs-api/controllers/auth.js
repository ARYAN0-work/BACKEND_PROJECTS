const User =require('../models/User')
const { StatusCodes } = require('http-status-codes')
const {BadRequestError} = require('../errors')
const bcrypt =require('bcryptjs')

const register =async(req,res)=>{
const {name,email,password}= req.body

//now we need 2 methods genSalt hash 
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

const tempUser ={
    name,
    email,
    password:hashedPassword,
}

    const user = await User.create({ ...tempUser })
    res.status(StatusCodes.CREATED).json({ user })
}

// no.1  same emial err response 
// no. 2 maxlength in password bcz hash value is gonna be way longer  => just remove the maxlength validator

// now in mongo they got acess to our database they are gonna have diffuclty bcz they are gonna see our decrypt password: never store them as string
const login =async(req,res)=>{
    res.send('login user')
}

module.exports ={
    register,
    login,
}
