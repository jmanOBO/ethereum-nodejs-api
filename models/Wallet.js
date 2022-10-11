const mongoose=require("mongoose");

const walletSchema= new mongoose.Schema({
   userid:{
    ref: "User",
    type: mongoose.Schema.Types.ObjectId
   },
   eth_address:{
    type: String,
   },
   private_key:{
    type: String
   },

});
module.exports=mongoose.model("Wallet",walletSchema);