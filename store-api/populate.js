require('dotenv').config()  // bringing dotenv 

// we need to have another connection 

const connectDB = require('./db/connect') 
const Product = require('./models/product') 
const jsonProducts = require('./products.json')

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()// if theres any data left we will just delete it and start from scratch 
        await Product.create(jsonProducts) // you will have store api in atlas
        console.log('Success!!!');
    } catch (error) {
        console.log(error);
    }
}

start()