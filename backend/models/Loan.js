const mongoose = require('mongoose');
const { LoanStatus } = require('../utils/enums');

const loanDetailsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  loanTenure: {
    type: Number,
    required: true
  },
  reason: {
    type: String
  },
  requiredAmount: {
    type: String,
    required: true
  },
  employmentStatus: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: true
  },
  dateApplied: {
    type: Date,
    required: true
  },
  loanStatus: {
    type: String,
    enum: Object.values(LoanStatus),
    default: LoanStatus.PENDING
  }
});

module.exports = mongoose.model('LoanDetails', loanDetailsSchema);