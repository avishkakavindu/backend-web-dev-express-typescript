import express from 'express';

const router: express.Router = express.Router();

/*
    @usage: test url
    @url : http://127.0.0.1/api/users/
    @method: get
    @fields: N/A
    @access: PUBLIC
*/
router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(`<h3>hello world: user</h3>`);
});

/*
    @usage: to check the form data
    @url : http://127.0.0.1/api/users/login
    @method: post
    @fields: name, password
    @access: PUBLIC
*/
router.post('/login', (req: express.Request, res: express.Response) => {
  let formData = req.body;

  let context = {
    msg: 'Form data received!',
    formData: formData,
  };

  res.status(200).json(context);
});

export default router;
