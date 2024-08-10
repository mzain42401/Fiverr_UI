import mongoose from 'mongoose';
const connectToDatabase = async () => {
    try {
     await mongoose.connect(process.env.mongodb_URI);
   console.log("connected mongo");
   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default   connectToDatabase;