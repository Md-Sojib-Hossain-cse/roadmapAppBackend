import { error } from "console";
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();

//parsers
app.use(express.json());

const userRouter = express.Router();

app.use("/api/v1", userRouter);

console.log(process.cwd());

userRouter.get("/user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.send({
    success: true,
    message: "User created Successfully.",
    data: user,
  });
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
});

//global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
});

export default app;
