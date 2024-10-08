import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      dbName: "project",
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.messsage}`);
    process.exit(1);
  }
};
export default connectDB;
