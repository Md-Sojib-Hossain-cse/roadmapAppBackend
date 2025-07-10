import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes';
import cookieParser from 'cookie-parser';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://roadmap-app-frontend007.vercel.app',
      'https://roadmap-6lz5229iq-md-sojib-hossain-cses-projects.vercel.app',
    ],
    credentials: true,
  }),
);

//root route
app.get('/', (req: Request, res: Response) => {
  res.send('Roadmap App server boosted on....🔥🔥🚀');
});

app.use('/api', router);

//global error handler
app.use(globalErrorHandler);

//not found route
app.use(notFound);

export default app;
