import dbConnect from "./db/db.connect.js";
import runJob from "./worker/worker.js";

const startWorker = async () => {
      let intervalId;
      try {
            await dbConnect();

            await runJob();

            intervalId = setInterval(runJob, 1800000);
      } catch (error) {
            console.error("[WORKER] Failed to start:", error);
            clearInterval(intervalId);
            process.exit(1);
      }
};

export default startWorker;
