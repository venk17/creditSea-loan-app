import React from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const handleForm = async () => {
    const name = document.getElementById("name").value;
    const tenure = document.getElementById("tenure").value;
    const reason = document.getElementById("reason").value;
    const need = document.getElementById("need").value;
    const status = document.getElementById("status").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;

    if (!name || !tenure || !need || !status || !address1 || !address2) {
      alert("Fill out all required details");
      return;
    }

    const loanDetails = {
      fullName: name,
      loanTenure: Number(tenure),
      reason: reason,
      requiredAmount: need,
      employmentStatus: status,
      address1: address1,
      address2: address2,
      dateApplied: new Date(),
      loanStatus: "Pending"
    };

    try {
      await axios.post('https://creditsea-loan-app-2.onrender.com/api/loans/create', loanDetails);
      window.location.reload();
    } catch (error) {
      alert("Error submitting form. Please try again.");
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h1>Apply for a Loan</h1>
        </div>
        <div className="form-body">
          <div className="form-column">
            <label htmlFor="name">Full name as it appears on bank account</label>
            <input type="text" id="name" placeholder="Full name as it appears on bank account" />
            
            <label htmlFor="tenure">Loan tenure (in months)</label>
            <input type="text" id="tenure" placeholder="Loan tenure (in months)" />
            
            <label htmlFor="reason">Reason for loan</label>
            <textarea id="reason" placeholder="Reason for loan"></textarea>
          </div>
          <div className="form-column">
            <label htmlFor="need">How much do you need?</label>
            <input type="text" id="need" placeholder="How much do you need?" />
            
            <label htmlFor="status">Employment status</label>
            <input type="text" id="status" placeholder="Employment status" />
            
            <label htmlFor="address1">Employment address</label>
            <input type="text" id="address1" placeholder="Employment address" />
            
            <label htmlFor="address2">Home address</label>
            <input type="text" id="address2" placeholder="Home address" />
          </div>
        </div>
        <div className="form-footer">
          <button className="submit-button" onClick={handleForm}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;