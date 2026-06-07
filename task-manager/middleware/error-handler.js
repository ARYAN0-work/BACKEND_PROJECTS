const errorHanleMidlleware =(err,req,res,next) =>{
    return res.status(500).json(
        //{msg:err}or
        {msg:`something went wrong `}
    )
}

module.exports = errorHanleMidlleware