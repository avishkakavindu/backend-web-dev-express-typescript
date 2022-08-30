import http, { Server, IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const HOSTNAME: string = "127.0.0.1";
const PORT: number = 3000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // fs module
    let file_path = path.join(__dirname, "data", "notes.txt");
    fs.readFile(file_path, "utf-8", (err, result) => {
      if (err) {
        console.log(err);
      }
      let file_path_2 = path.join(__dirname, "data", "data.txt");
      fs.writeFile(file_path_2, result, "utf-8", (err) => {
        if (err) {
          console.log(err);
        }
        response.end(`<pre>Data file created!</pre>`);
      });
      // response.end(`<pre>${result}</pre>`);
    });

    // response.end(`<h3>Welcome to Node JS server</h3>`);
  }
);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
