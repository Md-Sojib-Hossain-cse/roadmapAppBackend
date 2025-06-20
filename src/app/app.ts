import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { UserRoutes } from './modules/users/users.routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Roadmap App server boosted on....🔥🔥🚀');
});

//global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'something went wrong!';
  if (error) {
    res.status(statusCode).json({
      success: false,
      message: message,
    });
  }
});

export default app;
