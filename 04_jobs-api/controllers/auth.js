// starting with the auth and in the starting we are just gonna give some structure 

const register =async(req,res)=>{
    res.send('register user')
}

const login =async(req,res)=>{
    res.send('login user')
}

module.exports ={
    register,
    login,
}
