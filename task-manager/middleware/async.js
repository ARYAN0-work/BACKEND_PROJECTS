//so whats actually happening is we are wrapping all our controller and wrapping the getAllTasks and we pass in the controller as argument and since in js we can do this and i need to pass a parameter in controller as argument back in my sync js my middleware i just need to go with some sort of parameter now you can call this callback as i am going with fn "i am trying to avoid try-catch" we try  to setup try catch in wrapper and the first thing i want to do from this fn is to return another one so in here i'll say return async and then in express we get default next(),req,res so  what am i trying to do is i wrapped my controller in mt middleware and if you pay close attention we are invking async wrapper right away now of course i want to pass in those req res and next down to my function to this controllwe 

const asyncWrapper =(fn)=>{
    return async (req,res,next) =>{
        try{
            await fn(req,res,next)
        }catch(error){
          next(error)  
        }
    }
}

module.exports =asyncWrapper