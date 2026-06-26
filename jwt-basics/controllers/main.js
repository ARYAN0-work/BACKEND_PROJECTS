const express = require('express');
const CustomAPIError = require('../errors/custom-error')
const jwt =require('jsonwebtoken')

const login = async(req,res)=>{    
    const {username,password} = req.body// dont send a confidential infoover here dont send password bad practice
 
    if (!username|| !password) {
        throw new CustomAPIError('Plz provide email and password',400)
    }

    //just for demo, normally provided byy DB !!!
    const id = new Date().getDate()

    // try to keep payload small, better experience for user 
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})// payload | jwt secret |options 

    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Beaer')) {
        throw new CustomAPIError("No token provided",401);
    }

    const token = authHeader.split(' ')[1]
    
    //seeing that we got a valid token 
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello,${decoded.username}`,secret:`Here is your authorized data your lucky number is ${luckyNumber}`})
        } catch (error){
        throw new CustomAPIError("Not authorized to acess this route",401);
    }
   // now all this data is coming from payload when we signed the token 

    console.log(token);// we got back the token from forntend 
    
}

module.exports ={
    login,dashboard
}