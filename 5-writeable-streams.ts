// import * as fs from "fs";
// import { Writable } from "stream";

// // const stream = fs.createWriteStream("./file.txt");

// // stream.write("Hello World", (error) => {
// //   if (error) {
// //     console.error(error);
// //   } else {
// //     console.log("Completed");
// //   }
// // });

// // stream.on("finish", () => {
// //   console.log("I don finish abeg");
// // });

// // stream.write("Some");
// // stream.write("Shaba");

// // const readable = fs.createReadStream("./file.txt");
// // const writeable = fs.createWriteStream("./file2.txt");

// // readable.on("data", (chunk) => {
// //   writeable.write(chunk);
// // });

// // writeable.on("finish", () => {
// //   console.log("Done ooo");
// // });

// // readable.pipe(writeable);

// const writable = new Writable();
// writable._write = function (chunk, encoding, next) {
//   console.log(chunk.toString());
//   next();
// };

// writable.write("Hello World");

import * as fs from "fs";
import * as util from "util";
import { Writable } from "stream";

const writeFile = util.promisify(fs.writeFile);

class WritableFileStream extends Writable {
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  _write(chunk: any, encoding: string, next: (error?: Error) => void) {
    writeFile(this.path, chunk)
      .then(() => next())
      .catch((error) => next(error));
  }
}

const readable = fs.createReadStream("./file.txt");
const writable = new WritableFileStream("./file2.txt");

readable.pipe(writable);

// let a: number, b: number;

// process.stdin.on("data", (data) => {
//   if (a === undefined) {
//     a = Number(data.toString());
//   } else if (b === undefined) {
//     b = Number(data.toString());
//     console.log(`${a} + ${b} = ${a + b}`);
//     process.stdin.pause();
//   }
// });

// readable.pipe(process.stdout);
