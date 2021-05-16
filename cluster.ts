import * as os from "os";
import * as cluster from "cluster";
import * as http from "http";

// const numberOfCores = os.cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} started`);
//   for (let i = 0; i < numberOfCores; i++) {
//     cluster.fork();
//   }
// } else {
//   http
//     .createServer((req, res) => {
//       setTimeout(() => {
//         res.end(process.pid.toString());
//       }, 1000);
//       //   res.writeHead(200);
//       //   res.end(`Process ${process.pid} says hello!`);
//     })
//     .listen(8000);
//   console.log(`Worker ${process.pid} started`);
// }

// const numberOfCores = os.cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} started`);
//   for (let i = 0; i < numberOfCores; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker) => {
//     console.log(`worker ${worker.process.pid} stopped working`);
//     cluster.fork();
//   });
//   cluster.on("fork", (worker) => {
//     console.log(`Worker ${worker.process.pid} started`);
//   });
// } else {
//   http
//     .createServer((req, res) => {
//       res.writeHead(200);
//       res.end(`Process ${process.pid} says hello!`);
//     })
//     .listen(8000);
// }

// const worker = cluster.fork();
// worker.on("online", () => {
//   console.log(`Worker ${worker.process.pid} started`);
// });
// worker.on("exit", () => {
//   console.log(`worker ${worker.process.pid} stopped working`);
//   cluster.fork();
// });

// if (cluster.isMaster) {
//   const worker = cluster.fork();
//   worker.on("message", (text) => {
//     console.log(text);
//   });
// } else {
//   process.send("Hello!");
// }
