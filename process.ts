import { spawn, exec, fork } from "child_process";

// const child = spawn("ls");

// child.stdout.on("data", (data) => {
//   console.log(data.toString());
// });

// exec("ls | grep .txt", (error, response) => {
//   console.log(response);
// });

// const child = spawn("ls | grep .txt", {
//   shell: true,
// });

// child.stdout.on("data", (result) => {
//   console.log("Result:", result.toString());
// });

// const child = fork("./child.ts");
// // console.log(process.execArgv);

// child.send(5);
// child.on("message", (message: number) => {
//   console.log("Result: ", message);
// });

factorial(20)
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch(() => {
    console.log("An error occured");
  });

function factorial(n: number) {
  return new Promise((resolve, reject) => {
    const child = fork("./child.ts");
    child.send(n);
    child.on("message", (result: number) => {
      resolve(result);
    });
    child.on("error", () => {
      reject();
    });
  });
}
