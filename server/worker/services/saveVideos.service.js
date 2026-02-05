import Video from "../../models/video.model.js";

const saveVideos = async (videos) => {
      try {
            const result = await Video.insertMany(videos, { ordered: false });
            console.log(result);
            return result.length;
      } catch (error) {
            if (error.code === 11000) {
                  console.warn("[WORKER] Duplicate videos ignored");
                  return 0;
            }
            console.log(error.message);
      }
};

export default saveVideos;