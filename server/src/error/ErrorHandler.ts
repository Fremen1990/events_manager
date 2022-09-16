import { NextFunction, Request, Response } from "express";

const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message, errors } = err;
  let validationErrors;
  if (errors) {
    validationErrors = {};
    errors.forEach((error: any) => (validationErrors[error.param] = error.msg));
    res.status(status).send({
      path: req.originalUrl,
      timestamp: new Date().getTime(),
      message: message,
      validationErrors,
    });
  }
};

export default ErrorHandler;
