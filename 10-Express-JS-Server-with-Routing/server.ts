import express from 'express';
import routes from './routes/apiRoutes';
import user_routes from './routes/userRouter';

// initialize
const app: express.Application = express();

const HOSTNAME: string = '120.0.0.1';
const PORT: number = 3000;

// routes
app.use('/api', routes);
app.use('/api/user', user_routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
