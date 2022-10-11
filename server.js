require("dotenv").config();
const express=require("express");
const cookieParser=require("cookie-parser");


const dbConnect=require("./models/dbConnect");

const PORT=process.env.PORT;
const mongodb_conn_string=process.env.MONGODB_CONNECT_STRING;
const app=express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", require("./routes/v1/routeHandler"));



try{
    dbConnect.connect(mongodb_conn_string);
    console.log("database connected");

   


    app.listen(PORT, ()=>console.log(`server listening on port: ${PORT}`));
}
catch(err){
    console.log("An error occured: "+ err);
}

