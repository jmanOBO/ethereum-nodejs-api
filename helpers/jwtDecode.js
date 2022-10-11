

const jwt=require("jsonwebtoken");


const decodeAccessToken=(token)=>{
    try{
      const decoded=jwt.verify(token, process.env.JWT_ACCESS_PASSWORD);
       return {decoded,error:null}
    }catch(err){
      return {
          decoded: null, error: err.message,
      }
    }
  }


const decodeRefreshToken=(token)=>{
  try{
    const decoded=jwt.verify(token, process.env.JWT_REFRESH_PASSWORD);
     return {decoded,error:null}
  }catch(err){
    return {
        decoded: null, error: err.message,
    }
  }
}

module.exports={decodeAccessToken,decodeRefreshToken};
