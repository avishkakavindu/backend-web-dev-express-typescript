import express from 'express';
import bcrypt from 'bcryptjs';
import { body, ValidationChain, validationResult } from 'express-validator';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(`<h3>hello world:user</h3>`);
});

const VALIDATIONS = [
  body('name').trim().isLength({ min: 3 }).escape().withMessage('Name is required!'),
  body('email').trim().isEmail().normalizeEmail().escape().withMessage('Email is required!'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password length must be > 3!')
    .notEmpty()
    .withMessage('Password is required!'),
];

router.get('/register', VALIDATIONS, async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
