const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb+srv://Venkat:Venkat%402002@cluster0.qdstrz6.mongodb.net/mearnapp?retryWrites=true&w=majority&appName=Cluster0";

<<<<<<< HEAD
    const conn = await mongoose.connect(mongoURI);
=======
    const conn = await mongoose.connect(mongoURI);  // ✅ no deprecated options
>>>>>>> 7bc1eef5a8ab7b2cc6101fe18e1157e260d7ee20
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
