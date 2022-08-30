import http, { Server, IncomingMessage, ServerResponse } from "http";
import os from "os";

const HOSTNAME: string = "127.0.0.1";
const PORT: number = 3000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // os module
    let osData = {
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      homedir: os.homedir(),
      computerName: os.hostname(),
    };

    // response.end(`<h3>Welcome to Node JS server</h3>`);
    response.end(`<pre> ${JSON.stringify(osData)}</pre>`);
  }
);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
