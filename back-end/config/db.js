import mongoose from "mongoose";

// connect mongoose URI
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.messsage}`);
    process.exit(1);
  }
};

export default connectDb;