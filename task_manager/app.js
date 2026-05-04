const express = require('express')
const app = express()

// routes 
app.get('/hello',(req,res)=>{
    res.send('Task Manger App')
})

// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task


const PORT = 3000

app.listen(PORT,()=>
    {console.log(`Server is listening on port ${PORT} `)
});