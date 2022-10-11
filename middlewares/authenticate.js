const { decodeAccessToken } = require("../helpers/jwtDecode");

const authenticate=async (req,res,next)=>{
 const auth_header=req.headers["authorization"];
 if(!auth_header) return res.status(401).json({message:"User not authenticated", error:true});
 const token=auth_header.split(" ")[1];
 const {decoded,error}=await decodeAccessToken(token);
 if(error) return res.status(401).json({message:"Your token might have expired",error:true});

 req.user=decoded.userid;
 
 next();


}
module.exports=authenticate;