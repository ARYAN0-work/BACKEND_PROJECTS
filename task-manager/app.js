const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()// in order to get that secrets just invoke that pkg

//middleware
app.use(express.json())

// routes 
app.get('/hello',(req,res)=>{
    res.send('Task Manger App')
})

app.use('/api/v1/tasks',tasks)

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
