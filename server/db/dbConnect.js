import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongo_uri = process.env.MONGO_URI;

async function dbConnect() {
    try {
        await mongoose.connect(mongo_uri); // Connecting MongoDB
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Failed to connect to Database",error);
    }
}

dbConnect();