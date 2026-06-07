const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()// in order to get that secrets just invoke that pkg
const notFound = require('./middleware/not-found')

//middleware
app.use(express.static('./public'))
app.use(express.json())

// routes 
app.use('/api/v1/tasks',tasks)

app.use(notFound)

// here the loction is imp 

const PORT = 3000

const start = async()=>{ // bcz connect.js returns a promise
    try {
        await connectDB(process.env.MONGO_URI)//pass the string coming from .env file => we will spin up the server only if server connection is ok
        app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}...`)
})

    } catch (error) {
        console.log(error);
        
    }
}

start()

// now setting up our future docs and assign them to the collection
