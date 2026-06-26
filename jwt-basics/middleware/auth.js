

const authenticationMiddleware = async (req,res,next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Beaer')) {
        throw new CustomAPIError("No token provided",401);
    }

    const token = authHeader.split(' ')[1]
     
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decoded 
        req.user ={ id,username}
       
        } catch (error){
        throw new CustomAPIError("Not authorized to acess this route",401);
    }
    next()
}

module.exports =authenticationMiddleware