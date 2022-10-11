
const jwt=require("jsonwebtoken");
const ACCESS_TOKEN_PASSWORD=process.env.JWT_ACCESS_PASSWORD;
const REFRESH_TOKEN_PASSWORD=process.env.JWT_REFRESH_PASSWORD;

const createAccessToken=async(id)=>{
  const token=await jwt.sign({
    userid:id,
  },ACCESS_TOKEN_PASSWORD,{
    expiresIn: "130s",
  });
  return token;
}

const createRefreshToken=async(id)=>{
    const token=await jwt.sign({
        userid:id
    },REFRESH_TOKEN_PASSWORD,{
        expiresIn: "1d"
    });
    return token;
}

module.exports={
    createAccessToken,
    createRefreshToken
}