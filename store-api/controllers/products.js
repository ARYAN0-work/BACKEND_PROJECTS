// its gonna be async of-course bcz we are gonna use the methods on mongoose  

const getAllProductsStatic = async(req,res)=>{
    res.status(200).json({ msg:'products testing route' })
}


const getAllProducts = async(req,res)=>{
    res.status(200).json({ msg:'products route' })
}

module.exports ={
    getAllProducts,
    getAllProductsStatic
}