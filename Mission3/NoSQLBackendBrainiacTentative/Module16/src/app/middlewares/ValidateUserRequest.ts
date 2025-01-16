import { RequestHandler } from 'express';
import { AnyZodObject } from 'zod';

const DataValidation = (schema: AnyZodObject): RequestHandler => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default DataValidation;
