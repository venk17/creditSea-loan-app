const { check, validationResult } = require('express-validator');

exports.register = [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
];

exports.login = [
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password is required').exists()
];

exports.updateProfile = [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail()
];

exports.createLoan = [
  check('fullName', 'Full name is required').not().isEmpty(),
  check('loanTenure', 'Loan tenure is required').isNumeric(),
  check('requiredAmount', 'Required amount is required').not().isEmpty(),
  check('employmentStatus', 'Employment status is required').not().isEmpty(),
  check('address1', 'Address is required').not().isEmpty(),
  check('address2', 'Address is required').not().isEmpty()
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(new ApiResponse({ errors: errors.array() }, false));
  }
  next();
};