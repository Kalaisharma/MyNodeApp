const loginmiddleware=(req,res,next)=>{
   console.log("Middleware activated")
    next()
}
module.exports={loginmiddleware}