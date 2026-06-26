const express = require('express');
const CustomAPIError = require('../errors/custom-error')

const login = async(req,res)=>{    
    const {username,password} = req.body

    
    // WITH DB WE HAVE 3 OPTIONS 
    // mongo required validation 
    // entire additional layer of validation=> use  joi 
    // check both the balues 
    if (!username|| !password) {
        throw new CustomAPIError('Plz provide email and password',400)
    }

    console.log(username,password);
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, John Doe`,secret:`Here is your authorized data your lucky number is ${luckyNumber}`})
}

module.exports ={
    login,dashboard
}