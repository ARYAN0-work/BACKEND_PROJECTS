const express = require('express');
const CustomAPIError = require('../errors/custom-error')
const jwt =require('jsonwebtoken')

const login = async(req,res)=>{    
    const {username,password} = req.body
 
    if (!username|| !password) {
        throw new CustomAPIError('Plz provide email and password',400)
    }

    
    const id = new Date().getDate()

   
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) => {
    
    console.log(req.user);
    
      const luckyNumber = Math.floor(Math.random()*100)
     res.status(200).json({msg:`Hello,${decoded.username}`,secret:`Here is your authorized data your lucky number is ${luckyNumber}`})
  
    console.log(token);
}

module.exports ={
    login,dashboard
}