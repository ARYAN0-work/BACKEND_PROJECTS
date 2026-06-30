const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{// name of the property
       type:Number,
       required:[true,'product price must be provided']
    }, // these are created on the basies of data 
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:false,
    },
    //now for this mongoose have default methods 
    createAt:{
    type: Date,
    default: Date.now()
    },
     // now notice you cant just add companys blindly you can only choose and select specfic companies for limiting option use enum properties and also we can setup a custom message if any of these item doesnt match to our comapnies 
    company: {
    type: String,
    enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported',
        },
    },
    // enum: ['ikea','liddy','caressa','macros'],
})

module.exports =mongoose.model('Product',productSchema)