const Product = require('../models/product')

const getAllProductsStatic = async(req,res)=>{
    const products = await Product.find({name:'vase table'})
    res.status(200).json({ products,nbHits:products.length })
}

const getAllProducts = async(req,res)=>{
    const products = await Product.find(req.query)// what happens we mongoose look and say i dont have something page property and set to 2 => in short it will work with the most basic setup but as with filtering increase more complexity it will have better approch such as only the prop you want to apply 
   const { featured } = req.query// i am only looking for feature

// method to setup a new property  => in short if fature is true => from this we can avoid that bug which come in starting 
   const queryObject = {}

   if (featured) {
    queryObject.featured = featured === 'true'? true:false
   }
   console.log(queryObject)

    res.status(200).json({ products,nbHits:products.length })// now we setup the logic 
}

module.exports ={
    getAllProducts,
    getAllProductsStatic
}