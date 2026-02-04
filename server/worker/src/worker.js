import { getApiKey, rotateApiKey } from "../api/src/utils/keyManager.js";
import fetchVideos from "../services/youtube.service.js";
import transformVideos from "../services/transform.service.js";
import saveVideos from "../services/saveVideos.service.js";

const runJob = async () => {
      try {
            const api_key = getApiKey();
            const fetched_data = await fetchVideos(api_key);
            const videos = transformVideos(fetched_data);
            const insertedCount = await saveVideos(videos);

            console.log(`[WORKER] Success - Inserted: ${insertedCount} videos`);
      } catch (error) {
            if (error.message.includes("quota")) {
                  console.warn("[WORKER] Quota exceeded. Rotating key now...");
                  rotateApiKey();
            } else {
                  console.error("[WORKER] Error:", error.message);
            }
      }
      console.log("[WORKER] Job finished");
};

export default runJob;
