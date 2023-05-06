const errorHandler = (res,statusCode=500,message="Internal Server Error") =>{
    return res.status(statusCode).json({
        success:false,
        message:message
    })
}

const asyncError = (passFunc) =>(req,res)=>{

    return Promise.resolve(passFunc(req,res)).catch(err=>{
        return errorHandler(res,500,err.message)
    })

}
module.exports = {asyncError,errorHandler}