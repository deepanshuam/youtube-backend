const asyncHandler=(fun)=>async(res,req,next)=>{
    try {
        await fun(res,req,next);
        
    } catch (error) {
        res.status(err.code||500).json({succes:false, message:err.message});
    }

}
export{asyncHandler}