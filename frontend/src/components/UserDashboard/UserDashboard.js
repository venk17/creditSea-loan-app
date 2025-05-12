import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';
import { columns } from '../../utils/columns';
import { Table } from 'antd';
import './UserDashboard.css';

const UserDashboard = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://creditsea-loan-app-2.onrender.com/api/loans/many');
        const data = response.data.data || [];
        const result = data.map(item => ({
          'Loan Officer': item.fullName,
          'Amount': `$${item.requiredAmount?.toLocaleString() || '0'}`, // Format as currency
          'Date Applied': new Date(item.dateApplied).toLocaleDateString(), // Format date
          'Status': item.loanStatus,
          'key': uuid()
        }));
        setLoanData(result);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="user-dashboard">
      {!formVisible && <Navbar isUser={true} />}
      {formVisible && (
        <div className="close-form" onClick={toggleForm}>
          ×
        </div>
      )}
      
      <div className="dashboard-content">
        {formVisible && <Form />}
        
        {!formVisible && (
          <>
            <div className="dashboard-header">
              <div className="header-left">
                <div className="deficit-box">
                  <div className="deficit-icon"></div>
                  <div className="deficit-text">
                    <span>DEFICIT</span>
                    <h1>0.0</h1>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <button className="loan-button" onClick={toggleForm}>
                  Get a Loan
                </button>
              </div>
            </div>
            
            <div className="dashboard-actions">
              <div className="action-buttons">
                <button className="action-button">Borrow Cash</button>
                <button className="action-button">Transact</button>
                <button className="action-button">Deposit Cash</button>
              </div>
              <div className="search-box">
                <div className="search-icon">🔍</div>
                <input 
                  type="search" 
                  placeholder="Search for loans" 
                  className="search-input" 
                />
              </div>
            </div>
            
            <div className="loan-table">
              <Table 
                columns={columns} 
                dataSource={loanData} 
                title={() => "Applied Loans"} 
                pagination={{ pageSize: 5 }} // Added pagination
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;