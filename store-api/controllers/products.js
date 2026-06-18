const getAllProductsStatic = async(req,res)=>{
    //throw the error
    //if i do this then we will be actually be able to accesss that error in our custom error handler essentially what that means is whenever mongoose is going to spit back error previously we crate try catch then async wrapper but this time the pkg will take care of that
    throw new Error('testing async errors')
    res.status(200).json({ msg:'products testing route' })
}


const getAllProducts = async(req,res)=>{
    res.status(200).json({ msg:'products route' })
}

module.exports ={
    getAllProducts,
    getAllProductsStatic
}