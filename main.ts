// File System
// import logEnv from "./utils/logenv";
import touch from "./utils/touch";
import reado from "./utils/reado";

// logEnv();

const command = process.argv[2];
const path = process.argv[3];
const content = process.argv[4];

if (command) {
  switch (command) {
    case "touch": {
      touch(path, content);
      break;
    }
    case "reado": {
      reado(path);
      break;
    }
    default: {
      console.log("Unknown command");
    }
  }
} else {
  console.log("Command missing");
}
