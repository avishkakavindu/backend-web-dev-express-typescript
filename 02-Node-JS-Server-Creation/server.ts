import http, { Server, IncomingMessage, ServerResponse } from "http";

const HOSTNAME: string = "127.0.0.1";
const PORT: number = 3000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(`<h3>Welcome to Node JS server</h3>`);
  }
);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
