const web3=require("web3");
const models=require("../models");
const hashPassword=require("../helpers/hashPassword");
const {createAccessToken, createRefreshToken}=require("../helpers/jwtCreate");
const comparePasswords=require("../helpers/comparePasswords");
const mongoose = require("mongoose");

const getCurrentUserDetails=async(req,res)=>{
    const currentUser=req.user;
    const wallet=await models.Wallet
    .findOne({userid:mongoose.Types.ObjectId(currentUser)})
    .populate("userid",["email"]);
    res.json({wallet});
  }

const getAllUsers=async(_,res)=>{
  const users=await models.User.find({});
    res.json({message:"successfully fetched all users",error:null,users});
}

const getSingleUser=async(req,res)=>{
    let user;
    let {userid}=req.params;
     userid=userid.trim();
     try{
         user=await models.User.findById(mongoose.Types.ObjectId(userid));
         if(!user) throw new Error("could not find user");
     }catch(err){
      return res.status(400).json({message: err.message, error:true});
     }
    
  
      res.json({message:`successfully fetched user with id ${userid}`,error:null,user});
  }

const registerUser=async(req,res)=>{
  const{
     email,
     password,
  }=req.body;

  const findEmail=await models.User.findOne({email});
  if(findEmail) return  res.status(409).json({message: "The email is already found in our database.",error:true});

  const Web3=new web3();
  const {address,privateKey}=Web3.eth.accounts.create();
  
  const hashedPassword=await hashPassword(password);
  const user=await models.User.create({
    email, 
    password: hashedPassword, 
  
  });
   const wallet={
    userid: mongoose.Types.ObjectId(user._id),
    eth_address: address,
    private_key: privateKey
   }
   await models.Wallet.create(wallet);
   res.status(201).json({message: "Account created.",error:null});

}


const loginUser=async(req,res)=>{
    const {
        email,password
    }=req.body;
    if(!email || !password) return res.status(401).json({message: "Email or/and password cannot be empty.",error:true});
    const user=await models.User.findOne({email});
    if(!user) return res.status(404).json({message:"User not found.",error:true});
    
    const hashedPassword=user.password;

    if(await comparePasswords(password,hashedPassword)==false){
      return res.status(401).json({
        message: "Incorrect Password",
        error: true,

      });
    }
    const accessToken=await createAccessToken(user._id);
    const refreshToken=await createRefreshToken(user._id);
    await models.User.findOneAndUpdate({email},{refreshToken});
    
    res.cookie("jwt",refreshToken,{maxAge: 24*60*60*1000,httpOnly:true});
    res.status(200).json({message:"Login successful",error:null,accessToken});
    
    

}

const logOutUser=async(req,res)=>{
    const cookies=req.cookies;
    if(!cookies.jwt) return res.json({message:"You are already logged out", error:null});
    await models.User.updateOne({refreshToken:cookies.jwt},{$set:{refreshToken:""}});
    res.clearCookie("jwt",{maxAge: 24*60*60*1000,httpOnly:true});
    res.json({message:"Log out successful", error:null});
   
   }
module.exports={
    getCurrentUserDetails,
    getAllUsers,
    getSingleUser,
    registerUser,
    loginUser,
    logOutUser
}