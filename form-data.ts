// import * as FormData from "form-data";
// import { request } from "http";
// import { createReadStream, createWriteStream } from "fs";

// const readStream = createReadStream("./logo-test.jpg");
// const writeStream = createWriteStream("./file4.txt");

// const form = new FormData();
// form.append("photo", readStream);
// form.append("firstName", "Cybertech");
// form.append("lastName", "Holma");

// // const req = request(
// //   {
// //     host: "localhost",
// //     port: "5000",
// //     path: "/upload",
// //     method: "POST",
// //     headers: form.getHeaders(),
// //   },
// //   (res) => {
// //     console.log(res.statusCode);
// //   }
// // );

// // form.pipe(req);
// form.pipe(writeStream);
