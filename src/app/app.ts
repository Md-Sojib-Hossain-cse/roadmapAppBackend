import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Roadmap App server boosted on....🔥🔥🚀');
});

//global error handler
app.use((error, req: Request, res: Response) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
    });
  }
});

export default app;
