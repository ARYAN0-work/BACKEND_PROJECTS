const express = require('express');

// check username , password in post(login) request
// if exist create new JWt
// send back to frontend
// setup auth so only the req wuth jwt access the dashboard

const login = async(req,res)=>{    
    const {username,password} = req.body
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