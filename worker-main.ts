import { Worker } from "worker_threads";

const worker = new Worker("./worker.js", {
  workerData: {
    value: 5,
    path: "./worker.ts",
  },
});

worker.on("message", (res) => {
  console.log({ res });
});
