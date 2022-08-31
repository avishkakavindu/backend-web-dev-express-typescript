import http, { Server, IncomingMessage, ServerResponse } from 'http';
import { StringUtil } from './util/StringUtil';
import { MathUtil } from './util/MathUtil';

const HOSTNAME: string = '127.0.0.1';
const PORT: number = 3000;

const server: Server = http.createServer(
	(request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html');

		let customerName: string = 'John Doe';

		let len = StringUtil.printLength(customerName);

		let result: string = StringUtil.printTriangle(customerName);

		let table = MathUtil.printMathTable(5);
		response.end(
			`<h3>Welcome to Node JS server</h3><p>Length: ${len}</p><pre>${result}</pre><pre>${table}</pre>`
		);
	}
);

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
