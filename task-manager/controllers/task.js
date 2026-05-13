const getAllTask = (req,res)=>{
    res.send('get all task')
}

const createTask =(req,res)=>{
    res.json(req.body)
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