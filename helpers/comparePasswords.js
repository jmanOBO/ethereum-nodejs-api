const bcrypt=require("bcryptjs");


const comparePasswords=(plain,hashed)=>{
  return bcrypt.compare(plain,hashed);
}
module.exports=comparePasswords;