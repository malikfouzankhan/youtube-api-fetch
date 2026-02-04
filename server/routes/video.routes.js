import express from "express";

const router = express.Router();

router.get("/", getVideos);
router.get("/search", searchVideos);

export default router;