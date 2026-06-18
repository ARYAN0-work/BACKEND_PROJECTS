const errorHandlerMiddleware =async(err,req,res,next)=>{
    console.log(err);
    return res.status(500).json({msg:"something went wrong,plz try again..."})
}

module.exports = errorHandlerMiddleware

// now here i am gonna send some hardcorded message -> now led to postman 

// and as you do that error in terminal => error testing async error see docs we didnt use next() bcz essentially in the docs instead of using next we simply need to throw a error and of couse  i am seeing error in console means i am getting an error in my custom error handler so functionally still works in short -> use a pkg[express-async-error] and enjoy : we console.log did just to see this err