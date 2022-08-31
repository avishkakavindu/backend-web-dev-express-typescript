import express from 'express';
import user_routes from './routes/userRouter';
import api_routes from './routes/apiRouter';
import appLogger from './middleware/appLogger';

// initialize
const app: express.Application = express();

const HOSTNAME: string = '120.0.0.1';
const PORT: number = 3000;

// configuration for form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use middleware
app.use(appLogger);

// routes
app.use('/api/', api_routes);
app.use('/api/user', user_routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
