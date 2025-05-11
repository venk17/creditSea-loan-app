const Loan = require('../models/Loan');
const ApiResponse = require('../utils/ApiResponse');

exports.createLoan = async (req, res) => {
  try {
    const loanDetails = req.body;
    loanDetails.dateApplied = new Date();
    
    const newLoan = new Loan(loanDetails);
    await newLoan.save();
    
    res.status(201).json(new ApiResponse({ message: "Loan created successfully" }));
  } catch (error) {
    res.status(500).json(new ApiResponse({ error: "Internal server error" }, false));
  }
};

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find({});
    const response = loans.map(loan => ({
      fullName: loan.fullName,
      requiredAmount: loan.requiredAmount,
      dateApplied: loan.dateApplied,
      loanStatus: loan.loanStatus
    }));
    
    res.status(200).json(new ApiResponse(response));
  } catch (error) {
    res.status(500).json(new ApiResponse({ error: "Internal server error" }, false));
  }
};