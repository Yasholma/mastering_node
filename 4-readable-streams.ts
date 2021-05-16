import * as fs from "fs";
import { StringDecoder } from "string_decoder";
import { Readable } from "stream";

const stream = fs.createReadStream("./file.txt", { encoding: "utf-8" });
const decoder = new StringDecoder("utf8");

stream.resume();

setTimeout(() => {
  stream.on("data", (chunk: Buffer) => {
    console.log(`Chunk: ${decoder.write(chunk)}`);
  });
}, 2000);

// const stream = new Readable();

stream.push("hello");
stream.push("world");
stream.push(null);

// stream.on("data", (chunk: Buffer) => {
//   console.log(chunk.toString());
// });
stream.on("readable", () => {
  let data;
  while (null !== (data = stream.read())) {
    console.log(data.toString());
  }
});
