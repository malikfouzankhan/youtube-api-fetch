import express from "express";
import dotenv from "dotenv";
import startWorker from "./startWorker.js";
dotenv.config();
import videoRoutes from "./api/routes/video.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const port = process.env.PORT || 5000;

startWorker();

const app = express();
app.use(express.json()); // To parse JSON

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use("/api/videos", videoRoutes);

const buildPath = path.join(__dirname, "dist");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
      res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
      console.log(`Server is up and running at: http://localhost:${port}`);
});
