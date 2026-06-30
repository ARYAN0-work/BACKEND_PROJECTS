require('dotenv').config()  // bringing dotenv 

// we need to have another connection 

const connectDB = require('./db/connect') 
const Product = require('./models/product') 
const jsonProducts = require('./products.json')

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!!');

        process.exit(0)// now start filtering before that using method : if we succuses weith pouplate s we will terminate the whole process we do't need this file to be running 
    } catch (error) {
        console.log(error);
        process.exit(1)// now start filtering before that using method : if we succuses weith pouplate s we will terminate the whole process we do't need this file to be running 
    }
}

start()