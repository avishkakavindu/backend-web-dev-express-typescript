import express from 'express';

// initialize
const app: express.Application = express();

const HOSTNAME: string = '120.0.0.1';
const PORT: number = 3000;

// routes
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(`<h3>hello world</h3>`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
