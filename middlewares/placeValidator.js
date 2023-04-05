const { check, validationResult } = require("express-validator");

exports.placeValidator = [
  check("title").trim().not().isEmpty().withMessage("Place title is missing"),
  check("details")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Place details are missing"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }
  next();
};
