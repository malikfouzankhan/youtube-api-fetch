import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const youtube_url = "https://www.googleapis.com/youtube/v3/search";
let api_key = process.env.YOUTUBE_DATA_API;

async function fetchVideos() {
      try {
        let query = "cricket";
            let response = await axios.get(youtube_url, {
                  params: {
                        part: "snippet",
                        q: query,
                        type: "video",
                        order: "date",
                        maxResults: 20,
                        key: api_key,
                  }
            });
            console.log(response);
      } catch (error) {
            console.log("Failed to call API", error);
      }
}

fetchVideos();