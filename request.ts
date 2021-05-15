import { IncomingMessage, request, IncomingHttpHeaders } from "http";
// import { createWriteStream } from "fs";
import { RequestOptions } from "node:https";

// const fileStream = createWriteStream("./file3.txt");

// const req = request(
//   {
//     host: "jsonplaceholder.typicode.com",
//     path: "/todos/1",
//     method: "GET",
//   },
//   (res: IncomingMessage) => {
//     // res.pipe(fileStream);
//     const chunks: any = [];
//     res.on("data", (chunk) => {
//       chunks.push(chunk);
//     });

//     res.on("end", () => {
//       const result = Buffer.concat(chunks).toString();
//       console.log({ result });
//     });
//   }
// );

// req.end();

interface Response {
  data: object;
  headers: IncomingHttpHeaders;
}

function performRequest(options: RequestOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    request(options, (res: IncomingMessage) => {
      const { statusCode, headers, statusMessage } = res;
      if (statusCode >= 300) {
        reject(new Error(statusMessage));
      }

      const chunks: any = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        const data = Buffer.concat(chunks).toString();
        const result: Response = {
          data: JSON.parse(data),
          headers: headers,
        };
        resolve(result);
      });
    }).end();
  });
}

performRequest({
  host: "jsonplaceholder.typicode.com",
  path: "/todos/1",
  method: "GET",
})
  .then((res) => {
    console.log({ res });
  })
  .catch((err) => {
    console.log(err);
  });
