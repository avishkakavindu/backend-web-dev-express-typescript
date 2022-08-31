import http, { Server, IncomingMessage, ServerResponse } from 'http';

const HOSTNAME: string = '127.0.0.1';
const PORT: number = 3000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html');

	let url = request.url;
	let method = request.method;

	if (request.url == '/login' && request.method === 'POST') {
		let body: any = '';
		try {
			request
				.on('data', (chunk) => {
					body += chunk;
				})
				.on('end', () => {
					let formData = JSON.parse(body);

					if (formData.name === 'John Doe' && formData.password === 'abc@123') {
						response.end(`<pre>Login success!</pre>`);
					} else {
						response.end(`<pre>Invalid credentials</pre>`);
					}
				});
		} catch (err) {
			console.log(err);
		}
	}

	// response.end(`<h3>Welcome to Node JS server</h3>`);
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
