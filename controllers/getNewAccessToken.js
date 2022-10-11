const models=require("../models");
const {decodeRefreshToken}=require("../helpers/jwtDecode");
const { createAccessToken } = require("../helpers/jwtCreate");

const getNewAccessToken=async(req,res)=>{
    const cookies=req.cookies;
  if(!cookies?.jwt) return res.status(401).json({message:"You are unauthorized to access this path.",error:true,});
   findCookies=models.User.findOne({refreshToken:cookies.jwt});
  if(!findCookies) return res.status(403).json({message:"You are forbidden from this path.",error:true,});
   const jwt=cookies.jwt;
   const {decoded,error}=decodeRefreshToken(jwt);
    if(error) return res.status(403).json({message:"Your token might have expired, Login again.",error:true});
    const userid=decoded.userid;
    const newAccessToken=await createAccessToken(userid);

   res.status(201).json({message:"New Access Token Generated", error:null,newAccessToken});
  
}

module.exports=getNewAccessToken;