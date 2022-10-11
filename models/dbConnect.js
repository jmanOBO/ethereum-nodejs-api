const mongoose=require("mongoose");

const dbConnect={
  
    connect: async(url)=>await mongoose.connect(url),
    close: ()=>mongoose.connection.close(),
  
}

module.exports=dbConnect;