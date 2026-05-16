const Task = require('../modals/Task')
const getAllTask = (req,res)=>{
    res.send('get all task')
}

const createTask =async (req,res)=>{ // we are using await on task.create thats why async
    try{
      const task = await Task.create(req.body)
      res.status(201).json({task})// 201 success
    } catch(error){
      res.status(500).json({msg:error})// 500 server error
    }
    //res.status(201).res.json({task}) bug => now we will have created a new doc with id 
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const deletetTask = (req,res)=>{
    res.send('delete task')
}

const updateTask = (req,res)=>{
    res.send('update task')
}

module.exports = {
    getAllTask,createTask,getTask,deletetTask,updateTask
}