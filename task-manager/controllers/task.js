const Task = require('../modals/Task')

// route for reading an task
const getAllTask =async (req,res)=>{
    //save thsi and then on postman fill a valid name then on get send you will get all tasks and this the 2nd route 
    try{ 
    const tasks = await Task.find({})// we want all the doc thats why we are leveing this empty => "Give me all task documents from MongoDB"
    res.status(200).json({tasks})// value is going to be = whatever i'm getting back and by using es6 shorthand where if proprty name is exactly same as variable for value its same as =>  ({tasks:tasks})
 } catch(error){
      res.status(500).json({msg:error})
 }
}
//Task ->Your model->Acts like manager of tasks collection, .find(Mongoose method for fetching documents ThinkSearch database{Empty object means"No filter"->Meaning ->Give EVERYTHING


// here we use the static fn and we pass in the empty object which just get us all docs in the collection and in our case those are tasks => setting up controller for create task and get all tasks and now for get task 

// route for creating an item 
const createTask =async (req,res)=>{ // we are using await on task.create thats why async
    try{
      const task = await Task.create(req.body)
      res.status(201).json({task})// 201 success
    } catch(error){
      res.status(500).json({msg:error})// 500 server error
    }
    //res.status(201).res.json({task}) bug => now we will have created a new doc with id 
}

// route for single item
const getTask = async (req,res)=>{
  try {
    const {id:taskID}  = req.params // const taskID = req.params.id
    const task = await Task.findOne({_id:taskID});// is the REAL database query.It means,Hey MongoDB-find ONE document whose _id equals taskID & Task is the model here not schema 
  if (!task) {
    return res.status(404).json({msg:`No task with id${taskID}`})
  }

   res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

// not that damn useful response bcz while delting a tak you are not really looking at your data 
const deletetTask = async (req,res)=>{ 
    try{
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({_id:taskID}) 
        if (!task) {
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({task})
   }catch(error){
    res.status(500).json({msg: error})
   }
}

const updateTask = async (req,res)=>{
  try {
    const {id:taskID} = req.params

   // setting up functionalty
   const task = await Task.findOneAndUpdate({_id:taskID}, req.body)
   if (!task) {
    return res.status(404).json({msg:`No task with id: ${taskID}`})
   }
    res.status(200).json({id:taskID,data:req.body})
  } catch (error) {
     res.status(500).json({msg: error})
  }
}
// req.bidy bcz we are updating something for that we need new info
module.exports = {
    getAllTask,createTask,getTask,deletetTask,updateTask
}