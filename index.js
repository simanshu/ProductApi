const express=require("express")
const connectToDatabase=require("./config/monggose")
const routes=require("./routers/index")
const app=express()
const port=8090
//midelware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api",routes)

async function startServer() {
    await connectToDatabase(); // Wait for MongoDB connection
    const server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    return server; // Return the server instance
  }
  
  async function main() {
    try {
      const server = await startServer(); // Start server after MongoDB connection
      // Additional setup or logic after the server starts can go here
      return { app, server }; // Return both app and server instances
    } catch (error) {
      console.error('Error starting application:', error);
      throw error;
    }
  }
  
  main(); // Call the main function
  // Export the app instance
  module.exports = app;
