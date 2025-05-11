const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller');
const validate = require('../utils/validations');

router.post('/create', validate.createLoan, loanController.createLoan);
router.get('/many', loanController.getLoans);

module.exports = router;