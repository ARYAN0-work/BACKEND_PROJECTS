const {createCustomError, CustomAPIError} = require('../errors/custom-error')
const errorHanleMidlleware =(err,req,res,next) =>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json(
        {msg:`something went wrong`}
    )
}

module.exports = errorHanleMidlleware