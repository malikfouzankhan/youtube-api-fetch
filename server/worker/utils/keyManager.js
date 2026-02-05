import dotenv from "dotenv";
dotenv.config();

const keys = process.env.YOUTUBE_DATA_API.split(",");
let currentIndex = 0;

export const getApiKey = () => keys[currentIndex];

export const rotateApiKey = () => currentIndex = (currentIndex + 1) % keys.length;
