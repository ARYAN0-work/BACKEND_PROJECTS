const express = require('express')
const app = express()
const tasks = require('./routes/task')

//middleware
app.use(express.json())// if we dont use this it wont be in the req.body 

// routes 
app.get('/hello',(req,res)=>{
    res.send('Task Manger App')
})

app.use('api/v1/tasks',tasks)

const PORT = 3000

app.listen(PORT,()=>
    {console.log(`Server is listening on port ${PORT} `)
});