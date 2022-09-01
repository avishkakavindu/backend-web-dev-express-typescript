import express from 'express';
import bcrypt from 'bcryptjs';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(`<h3>hello world:user</h3>`);
});

router.get('/register', async (req: express.Request, res: express.Response) => {
  let { name, email, password } = req.body;

  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    let context = {
      userData: { name, email, password },
      hash: hash,
    };

    return res.status(200).json(context);
  } catch (err) {
    console.log(err);
  }
});

export default router;
