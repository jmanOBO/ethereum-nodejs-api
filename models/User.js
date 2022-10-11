const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
   email: {
     type: String
   },
   password:{
    type: String
   },
   refreshToken:{
    type: String,
    default:""
   }

});
module.exports=mongoose.model("User",userSchema);