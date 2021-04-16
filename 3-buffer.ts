import { StringDecoder } from "string_decoder";
// const buffer = Buffer.alloc(5);

// buffer[0] = 255;
// buffer[1] = 256;
// buffer[2] = 260;
// buffer[3] = -50;

// console.log(buffer[0]);
// console.log(buffer[1]);
// console.log(buffer[2]);
// console.log(buffer[3]);
// console.log(-50 % 256);

// const buffer = Buffer.from("hello 🌎 world");
// console.log(buffer.toString());
const decoder = new StringDecoder("utf8");
const buffers = [
  Buffer.from("Hello "),
  Buffer.from([0b11110000, 0b10011111]),
  Buffer.from([0b10001100, 0b10001110]),
  Buffer.from(" world!"),
];

// let res = "";
// buffers.forEach((b) => {
//   res += b.toString();
// });

// console.log(res);

const res = buffers.reduce(
  (result, buff) => `${(result += decoder.write(buff))}`,
  ""
);

console.log(res);
