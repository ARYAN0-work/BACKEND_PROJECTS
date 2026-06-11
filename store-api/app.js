// first thing get that pkg in the env so i have access to env variables

require('dotenv').config()// we will work on this when we start connecting our database
//async errors

// importing two known imddleware fn => errorHandleer[so we can catch all the error] & notFoound 

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())// we are not gonna need this for this project

// routes
app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href ="/api/v1/products">products route</a>')
})// for testing 

// products route

// now after routes check the folowing
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// i am not gonna intially connect the connect db

// now setting up start fn

// if it is undefined so use harcoded value 

const port = process.env.PORT || 3000

const start = async()=>{
    try {
        //connectDB
        app.listen(port,console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error);
        
    }
}

start()