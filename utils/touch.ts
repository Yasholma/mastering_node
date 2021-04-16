import * as fs from "fs";
import * as util from "util";

const writeFile = util.promisify(fs.writeFile);

export default function touch(path: string, content = ""): void {
  writeFile(path, content)
    .then(() => {
      console.log("File created successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}
