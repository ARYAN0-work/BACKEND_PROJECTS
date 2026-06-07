const Task = require('../modals/Task')

const getAllTask =async (req,res)=>{
    
    try{ 
    const tasks = await Task.find({})

    //res.status(200).json({tasks})
    //  res.status(200).json({tasks,amount:tasks.length})// just about the object that we're sending back and instead of simply just sending task you can also send the amonunt of task => can name anything 
    res.status(200).json({success:true,data:{tasks,nbHits:tasks.length}}) // also i can setup a flag here and combination of above two [hackernews api use no.of hits essntial]
    // another flag status:"success"

/*
THE POINT IS => 

we have thses above options we can use there is mot a rule only sir's code is right just be consistent with the api code otherwise it will be reductant or the sir prefred way is bcz in formted there 2 thing when we have asynchronous response we already have try and catch and bcz of that i find the status or success to be a bit reduntant bcz effectivly just like showed you with delete if i'm succesful then code will run regardless and then if there's some kind of error then of my code is ginna be in catch block  and why i don't like setting up data well bcz on my front end usually i use axios and if  you're familiar with axios it returns a data property so it right away has the data object so if you set this response in such a manner where data returned in object then on the front end you'll have data and then in that data object  you have another data so eseentially on the front end you need to do something like this where data object inside of data object there's another data object and then you only get the tasks which is of course not the end of the world but in my case i find a bit reduntant 
*/

 } catch(error){
      res.status(500).json({msg:error})
 }
}

const createTask =async (req,res)=>{ 
    try{
      const task = await Task.create(req.body)
      res.status(201).json({task})
    } catch(error){
      res.status(500).json({msg:error})
    }
    
}


const getTask = async (req,res)=>{
  try {
    const {id:taskID}  = req.params 
    const task = await Task.findOne({_id:taskID});
  if (!task) {
    return res.status(404).json({msg:`No task with id${taskID}`})
  }

   res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

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

   
   const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
   new:true,
   runValidators:true
   })
   if (!task) {
    return res.status(404).json({msg:`No task with id: ${taskID}`})
   }
  
    res.status(200).json({task})
  } catch (error) {
     res.status(500).json({msg: error})
  }
}

const editTask = async (req,res)=>{
  try {
    const {id:taskID} = req.params

   
   const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
   new:true,
   runValidators:true,
   })
   if (!task) {
    return res.status(404).json({msg:`No task with id: ${taskID}`})
   }
  
    res.status(200).json({task}) 
  } catch (error) {
     res.status(500).json({msg: error})
  }
}
module.exports = {
    getAllTask,createTask,getTask,deletetTask,updateTask
}