import express from "express";
import dotenv from "dotenv";
import startWorker from "./startWorker.js";
dotenv.config();
import videoRoutes from "./routes/video.routes.js";

import dbConnect from "./db/db.connect.js";
await dbConnect();

const port = process.env.PORT || 5000;

// startWorker();

const app = express();
app.use(express.json()); // To parse JSON

app.get("/", (req, res) => {
      res.status(200).json({msg: "API calls working fine"});
});

app.use("/api/videos", videoRoutes);

app.listen(port, () => {
      console.log(`Server is up and running at: http://localhost:${port}`);
});



/*
1. DB mein count sahi nai ara
*/
