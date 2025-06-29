import { NextFunction, Response, Request } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
