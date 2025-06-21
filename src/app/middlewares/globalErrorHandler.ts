import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  //default values
  let statusCode = error.statusCode || 500;
  let message = error.message || 'something went wrong!';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something Went Wrong',
    },
  ];

  if (error) {
    res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      error,
    });
  }

  const handleZodError = (err: ZodError) => {
    const statusCode = 400;

    const errorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue?.path.length - 1],
        message: issue?.message,
      };
    });

    return {
      statusCode,
      message: 'Common Validation Error',
      errorSources,
    };
  };

  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error,
    stack: config.node_env === 'development' ? error?.stack : null,
  });
};

export default globalErrorHandler;
