const mongoose=require('mongoose')

//mongoose url
const url='mongodb://127.0.0.1:27017/ProductApi'

async function connectToDatabase() {
    try {
      await mongoose.connect(url);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error; // Rethrow the error to halt server startup
    }
  }
  
  module.exports = connectToDatabase; // Export the connectToDatabase function
