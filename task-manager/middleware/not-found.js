const notFound = (req,res)=>{
    res.status(404).send('there is no route for this req')
}

module.exports = notFound