const User =require('../models/User')
const { StatusCodes } = require('http-status-codes')
const {BadRequestError} = require('../errors')
const jwt = require('jsonwebtoken')

const register =async(req,res)=>{
    const user = await User.create({ ...req.body })
    const token = jwt.sign({user:{name:user.name},name:user.name},'jwtSecret',{
        expiresIn:'30d'
    })// be careful up here bcz of the security purpose
    res.status(StatusCodes.CREATED).json({ token })
}

const login =async(req,res)=>{
    res.send('login user')
}

module.exports ={
    register,
    login,
}
