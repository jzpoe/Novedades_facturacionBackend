import mongoose from 'mongoose'
import dotenv from 'dotenv/config';


// Your MongoDB connection string

mongoose.connect(process.env.MONGODB_URI,)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));



export default mongoose;