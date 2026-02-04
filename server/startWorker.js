import dbConnect from "./db/db.connect.js";
import runJob from "./worker/worker.js";

const startWorker = async () => {
    try {
        await dbConnect();

        await runJob();
    } catch (error) {
        console.error("[WORKER] Failed to start:", error);
        process.exit(1);
    }
}

export default startWorker;