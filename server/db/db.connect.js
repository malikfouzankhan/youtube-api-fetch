import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
    try {
        const mongo_uri = process.env.MONGO_URI;
        await mongoose.connect(mongo_uri); // Connecting MongoDB
        console.log("[WORKER] Database connected successfully!");
    } catch (error) {
        console.warn("[WORKER] Failed to connect to Database",error);
        process.exit(1);
    }
}

export default dbConnect;