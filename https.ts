import * as https from "https";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

async function startServer() {
  const [key, cert] = await Promise.all([
    readFile("./key.pem"),
    readFile("./certificate.pem"),
  ]);

  https
    .createServer({ key, cert }, (req, res) => {
      res.statusCode = 200;
      res.end("Hello World");
    })
    .listen(5000, () => {
      console.log("Server started");
    });
}

startServer();
