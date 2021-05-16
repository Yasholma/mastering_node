import * as fs from "fs";

// console.time("setTimeout");
// setTimeout(() => {
//   console.log("Timer went off");
//   console.timeEnd("setTimeout");
// }, 100);

// setTimeout(() => {
//   for (let i = 0; i < 10000000; ++i);
// }, 95);

// let i = 0;

// const id = setInterval(() => {
//   console.log(++i);
//   if (i > 10) clearInterval(id);
// }, 50);

// let i = 0;

// function increment() {
//   console.log(++i);
//   if (i <= 10) {
//     setTimeout(increment, 50);
//   }
// }

// increment();

// setTimeout(() => {
//   console.log("set timeout");
// }, 0);
// setImmediate(() => {
//   console.log("set immediate");
// });

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("set timeout");
  }, 0);
  setImmediate(() => {
    console.log("set immediate");
  });
});
