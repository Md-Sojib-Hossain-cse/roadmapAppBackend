import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Roadmap App server boosted on....🔥🔥🚀');
});

//global error handler
app.use(globalErrorHandler);

//not found route
app.use(notFound);

export default app;
