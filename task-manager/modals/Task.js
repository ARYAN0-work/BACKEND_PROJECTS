const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        //validatiors
        required:[true,'must provide name'],// if i pass the name 
        trim: true,// trim property
        maxlength:[20, 'name can not be more than 20 characters']// max length 
    },
    completed: {
        //validators
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task',TaskSchema)

// now we send empty string and sending request continuous error bcz 
// now whats validation error ->
// after sending a empty string on postman for put 
// first its caused in task schema bcz we finally set up the value there and we = true 
// look at console we have this unhandled promise rejection and this error => cause in our create task bcz we have await we're not hanling this gracefully 

// long story short user is hanging  
// bcz we are using a sync approch and not handling if theres a err

// now the 1st main ques do we have to to make try catch in every controller for solving this prob yes but at the end you will get it 

//now the 2nd main quest this quest isnt a lengthy can we make it shirter yes just set it to string value accept message parameter 