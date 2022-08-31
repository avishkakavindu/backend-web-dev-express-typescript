import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(`<h3>hello world:user</h3>`);
});

router.get('/test', (req: express.Request, res: express.Response) => {
  res.status(200).send(`<h3>hello world:user-test</h3>`);
});

export default router;
