const mongoose=require("mongoose")
const models = require("../models");

const getSingleWallet=async(req,res)=>{
    let wallet;
    let {walletid}=req.params;
     walletid=walletid.trim();
     try{
         wallet=await models.Wallet.findById(mongoose.Types.ObjectId(walletid));
        if(!wallet) throw new Error("Could not find wallet ID");
     }catch(err){
      return res.status(400).json({message: err.message, error:true});
     }
    
  
      res.json({message:`successfully fetched wallet with id ${walletid}`,error:null,wallet});
  }

const getAllWalletDetails=async(_,res)=>{
    const wallet=await models.Wallet.find({});
      res.json({message:"successfully fetched all wallet info",error:null,wallet});
  }
  module.exports={getAllWalletDetails,getSingleWallet};