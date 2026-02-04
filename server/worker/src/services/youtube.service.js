import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

async function fetchVideos(api_key) {
      const youtube_url = "https://www.googleapis.com/youtube/v3/search";
      let query = process.env.SEARCH_QUERY;
      let maxResults = process.env.MAX_RESULTS;
      try {
            let response = await axios.get(youtube_url, {
                  params: {
                        part: "snippet",
                        q: query,
                        type: "video",
                        order: "date",
                        maxResults,
                        key: api_key,
                  },
            });
            console.log("[WORKER] fetched data successfully", response.data);

            return response.data.items;
      } catch (error) {
            console.log("Failed to call API", error);
      }
}

export default fetchVideos;
