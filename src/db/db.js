const  mongoose = require ('mongoose')
const dotenv = require ('dotenv/config');


// Your MongoDB connection string

mongoose.connect(process.env.MONGODB_URI,)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));



module.exports= mongoose;