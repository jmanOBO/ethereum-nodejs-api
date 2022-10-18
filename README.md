# Ethereum Wallet API (With a hosted Working Demo on Heroku)
 This is an api made with NODE V16 . You can implement (or even expand on) to build a web3 application. I built this api with a mvc structure inmind to make the codes cleaner. I intentionally created the file structure to include models, controllers, helpers and middleware directories to make it more interesting.
  You will also learn a great deal from the authentication implementations.
 Enjoy. 

# Features of this API

 * Robust, secured authentication mechanism. 
 * Password hashing technique with bcrypt.
 * Applying the MVC(Model View Controller) design technique to the express framework with view excluded since we are working with json data and not .htmls. 
 * Implementing web3, creation of wallet addresses with private keys 
 * MongoDb Ingration with express js
 * Adhering to REST API guidelines
 * Adhering to the DRY (Dont repeat yourself) principle by creating helper files for common operations.
# Environmental Variables needed to start using the api asap
  You have to create a .env file in the root directory wih these environmental variables,these are the ones I used in creating the api, you can replace with yours:

        PORT=4000
        MONGODB_CONNECT_STRING=mongodb://localhost:27017/eth-wallet
        JWT_ACCESS_PASSWORD=93581eade7a50b46b318f336064a772d125f2e35
        JWT_REFRESH_PASSWORD=5c160f28085d028e8d3183a266ee96a017d0ec65

        Tip: create a secret with this from node: 'require("crypto").randomBytes(16).toString("Hex"); '

# Endpoints

  

   Base url: http://localhost:4000/api/v1 (4000 is the port number I used.)

   Get /user (this route goes into the wallets documnets and get the current user's info and also populates the      user's field)

   Get /users (get all users)
   Post /users (register a user)

   Get /users/{userId} (Get a particular user with a userid)
   Post /sign-in (authenticate a user with an email and password)
   Post /log-out (logs a user out)
   Post /access-token (generates a new accesstoken using a refreshtken).
   
   Get /wallets (get all wallets)
   Get /wallets/{walletId} (Get a particular wallet with it's walletid)

   # Demo (Hosted on Herorku)
   Base url: https://ethereum-wallet-api.herokuapp.com/api/v1

   First create an account by posting json object  like below:
    
    {
      "email":"example@example.com,
      "password":"password"
    }

   to https://ethereum-wallet-api.herokuapp.com/api/v1/users.

   And then login by posting json object like below:
   {
      "email":"example@example.com,
      "password":"password"
    }
   to https://ethereum-wallet-api.herokuapp.com/api/v1/sign-in

   You will receive an object containing an access token which is necessary to make further requests to other endpoints of the api. The access token expires after 130secs. And a refresh token is also issued but in an httpOnly cookie at this point. The refresh token expires after 1day.
   
   Within 24hrs after issue, the refresh token can be used to generate new access tokens with the enpoint below, you do not need to handle this in the body of requests as it is automatically sent  along as a cookie as long as you are logged in:

   https://ethereum-wallet-api.herokuapp.com/api/v1/access-token.

   Send a get request to the endpoint below to fetch all users. Make sure to send along a bearer header containing the access token:

   https://ethereum-wallet-api.herokuapp.com/api/v1/users .

   Also get the current signed in user's (you) details, all of them by sending a get request to the endpoint below. Also include the bearer token.

   https://ethereum-wallet-api.herokuapp.com/api/v1/user .

   Get a particular (any) user's details by sending a get request to the endpoint below. Again send along a bearer token.
   
   https://ethereum-wallet-api.herokuapp.com/api/v1/users/{userId}   (userId being a parameter) .
  
   Send a get request to the endpoint below to fetch all wallets (a wallet is created on every sign ups so create more than one accounts to get more than one wallets(eth addresses and private keys)). Make sure to send along a bearer header containing the access token:

   https://ethereum-wallet-api.herokuapp.com/api/v1/wallets .

   Get a particular(any) wallet's details by sending a get request to the endpoint below. Again send along a bearer token.
   
   https://ethereum-wallet-api.herokuapp.com/api/v1/wallets/{walletId}   (userId being a parameter).



   # Contact me

      Email: okonkwoify@algosonwebtechnologies.com

        