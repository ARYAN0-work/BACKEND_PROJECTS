require('dotenv').config()  // bringing dotenv 

// we need to have another connection 

const connectDB = require('./db/connect') 
const Product = require('./models/product') 
const jsonProducts = require('./products.json')

// now setting up the start fn one more time in here we are not setting up app.listen we are gonna connect DB and then use the model to automataically add those json products 

console.log(process.env.MONGO_URI)
console.log(typeof process.env.MONGO_URI)


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Success!!!');
    } catch (error) {
        console.log(error);
    }
}

start()