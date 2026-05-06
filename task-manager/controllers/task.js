const getAllTask = (req,res)=>{
    res.send('get all task')
}

const createTask =(req,res)=>{
    res.send('create task')
}

const getTask = (req,res)=>{
    res.send('get single task')
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