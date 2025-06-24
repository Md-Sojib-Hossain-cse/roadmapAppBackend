import { NextFunction, Response, Request } from 'express';
import AppError from '../errors/handleAppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "You're not an authorized user",
        );
      }

      jwt.verify(
        token,
        config?.jwt_access_secret as string,
        function (err, decoded) {
          if (err) {
            throw new AppError(
              httpStatus.UNAUTHORIZED,
              "You're not an authorized user",
            );
          }

          if (decoded) {
            req.user = decoded as JwtPayload;
            next();
          }
        },
      );
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
