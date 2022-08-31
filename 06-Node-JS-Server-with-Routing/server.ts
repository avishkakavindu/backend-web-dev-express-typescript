import http, { Server, IncomingMessage, ServerResponse } from 'http';

const HOSTNAME: string = '127.0.0.1';
const PORT: number = 3000;

const server: Server = http.createServer(
	(request: IncomingMessage, response: ServerResponse) => {
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html');

		// routes
		let url: string | undefined = request.url;
		let method: string | undefined = request.method;
		let result: string = '';

		if (url === '/' && method === 'GET') {
			result = `<h3>Welcome to Node JS server</h3>`;
		} else if (url === '/about' && method === 'GET') {
			result = `<h3>About Page</h3>`;
		} else if (url === '/services' && method === 'GET') {
			result = `<h3>Services Page</h3>`;
		} else if (url === '/contact' && method === 'GET') {
			result = `<h3>Contact Page</h3>`;
		} else {
			result = `<h3>Page Not Found</h3>`;
		}

		response.end(`${result}`);
	}
);

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
