# Ethereum Wallet API
 this is an api you can implement (or even expand on) to build a web3 application. I built this api with a mvc structure inmind to make the codes cleaner. I intentionally created the file structure to include models, controllers, helpers and middleware directories to make it more interesting.
  You will also learn a great deal from the authentication implementations.
 Enjoy. 

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


   # Demo (Loading...)

   # Contact me

      Email: okonkwoify@algosonwebtechnologies.com