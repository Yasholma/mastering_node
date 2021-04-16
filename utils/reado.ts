import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

export default function reado(path: string): void {
  //   readFile(path, { encoding: "utf-8" })
  readFile(path)
    .then((content) => {
      console.log(content instanceof Buffer);
      console.log(content.toString());
    })
    .catch((error) => {
      console.error(error);
    });
}
