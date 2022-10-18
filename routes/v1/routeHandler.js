const express=require("express");
const {getCurrentUserDetails,getAllUsers,getSingleUser, registerUser,loginUser, logOutUser}=require("../../controllers/users");
const getNewAccessToken=require("../../controllers/getNewAccessToken");
const authenticate=require("../../middlewares/authenticate");
const {getAllWalletDetails,getSingleWallet,} = require("../../controllers/wallet");

const router=express.Router();
router.route("/user")
        .get(authenticate,getCurrentUserDetails)  //this route goes into the wallets documnets and get the current user's info and also populates the      user's field

router.route("/users")
        .get(authenticate,getAllUsers)
        .post(registerUser);

router.route("/users/:userid")  
      .get(authenticate,getSingleUser);    

router.route("/wallets")
       .get(authenticate,getAllWalletDetails);

router.route("/wallets/:walletid")  
       .get(authenticate,getSingleWallet);
        
      
router.route("/sign-in")
        .post(loginUser);

router.route("/log-out")
        .post(logOutUser);       
        router.route("/refresh-token")
        .get(getNewAccessToken);

module.exports=router;