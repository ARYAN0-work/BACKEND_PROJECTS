const Product = require('../models/product')

const getAllProductsStatic = async(req,res)=>{
    const products = await Product.find({}).sort('name')//and if we want to add price dont add , just add price .sort('name price')//same with .sort('-name')// now our response is gonna be in alphabetical order
    res.status(200).json({ products,nbHits:products.length })
}

const getAllProducts = async(req,res)=>{
   const { featured,company,name,sort } = req.query
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
    let result = Product.find(queryObject) //in order to sort we need to chain it see why its in let
    // if the user didnt pass the sort
    if(sort){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList) // for splitting the sort[its a long string]
    } else{
        result = result.sort('createAt')
    }
    const products = await result
    res.status(200).json({ products,nbHits:products.length })// now we setup the logic 
}

module.exports ={
    getAllProducts,
    getAllProductsStatic
}