import { createServer, IncomingMessage, ServerResponse } from "http";
import * as multiparty from "multiparty";
import { writeFile } from "fs";
import { Stream } from "stream";

interface Post {
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    title: "Lorem ipsum",
    content: "Dolor sit amet",
  },
];

const PORT = 5000;
const server = createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
      case "/post": {
        if (req.method === "GET") {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(posts));
        } else if (req.method === "POST") {
          getJSONFromStream<Post>(req).then((post) => {
            posts.push(post);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(post));
          });
        }
        break;
      }
      case "/upload": {
        if (req.method === "POST") {
          await parseTheForm(req);
          res.end();
          // const chunks: any[] = [];
          // req.on("data", (chunk) => {
          //   chunks.push(chunk);
          // });
          // req.on("end", () => {
          //   const data = Buffer.concat(chunks).toString();
          //   res.end(data);
          // });
        }
        break;
      }
      default: {
        res.statusCode = 404;
        res.end();
      }
    }
  }
);

server.on("error", (error) => {
  console.log({ error });
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

function getJSONFromStream<T>(request: IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    request.on("data", (chunk) => {
      chunks.push(chunk);
    });

    request.on("end", () => {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  });
}

function parseTheForm(request: IncomingMessage) {
  const form = new multiparty.Form();
  form.parse(request);

  const fields = new Map<string, string>();
  let photoBuffer: Buffer;
  let filename: string;

  form.on("part", async (part: multiparty.Part) => {
    if (!part.filename) {
      await handleFieldPart(part, fields);
      part.resume();
    }
    if (part.filename) {
      filename = part.filename;
      photoBuffer = await getDataFromStream(part);
    }
  });

  form.on("close", () => handleWriting(fields, photoBuffer, filename));
}

async function handleFieldPart(
  part: multiparty.Part,
  fields: Map<string, string>
) {
  return getDataFromStream(part).then((value) =>
    fields.set(part.name, value.toString())
  );
}

function handleWriting(
  fields: Map<string, string>,
  photoBuffer: Buffer,
  filename: string
) {
  writeFile(
    `files/${fields.get("firstName")}-${fields.get("lastName")}-${filename}`,
    photoBuffer,
    () => {
      console.log(
        `${fields.get("firstName")} ${fields.get("lastName")} uploaded a file`
      );
    }
  );
}

function getDataFromStream(stream: Stream): Promise<Buffer> {
  return new Promise((resolve, _reject) => {
    const chunks: any[] = [];
    stream.on("data", (chunk) => {
      chunks.push(chunk);
    });

    stream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
  });
}
