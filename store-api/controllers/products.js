const Product = require('../models/product')

const getAllProductsStatic = async(req,res)=>{
    // we are looking for a name property but instead of looking for entire name instead we go with rejects where essentialy we're looking for the pattern => in insomnia we get all the items whoch have at a 
    const search = 'a'
    const products = await Product.find({name:{$regex:search,$options:'i'},
    })
    res.status(200).json({ products,nbHits:products.length })
}

const getAllProducts = async(req,res)=>{
    const products = await Product.find(req.query)
   const { featured,company,name } = req.query
   const queryObject = {}

   if (featured) {
    queryObject.featured = featured === 'true'? true:false
   }
   if (company){
    queryObject.company = company
   }
   if (name) {
    queryObject.name = {$regex:name,$options:'i'}
   }
   console.log(queryObject)

    res.status(200).json({ products,nbHits:products.length })// now we setup the logic 
}

module.exports ={
    getAllProducts,
    getAllProductsStatic
}