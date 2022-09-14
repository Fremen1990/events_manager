import { check, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

const validationEvent = [
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .bail()
    .isLength({ min: 2, max: 32 })
    .withMessage("Must be at least 2 and maximum 32 chars long"),
  check("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .bail()
    .isLength({ min: 2, max: 32 })
    .withMessage("Must be at least 2 and maximum 32 chars long"),
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Must be a valid email address"),
  check("eventDate")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Must be a valid date"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      const error = errors.array()[0];
      return res
        .status(400)
        .json({ error: { value: error.value }, message: error.msg });
    }
    next();
  },
];

export default validationEvent;
