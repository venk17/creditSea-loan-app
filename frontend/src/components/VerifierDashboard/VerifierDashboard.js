import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Navbar from '../Navbar/Navbar';
import { verifierColumns } from '../../utils/verifierColumns';
import { Table } from 'antd';
import { useAppSelector } from '../../utils/hooks';
import './VerifierDashboard.css';

const VerifierDashboard = () => {
  const [loanData, setLoanData] = useState([]);
  const menuState = useAppSelector(state => state.menu.state);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get(`https://creditsea-loan-app-2.onrender.com/api/many`);
        const data = response.data.data || [];
        
        const formattedData = data.map(item => ({
          'User Recent Activity': 'Recent activity placeholder',
          'Customer name': item.fullName,
          'Date': new Date(item.dateApplied).toLocaleDateString(),
          'Action': item.loanStatus,
          'key': uuid()
        }));
        
        setLoanData(formattedData);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };

    fetchLoanData();
  }, []);

  const handleStatusChange = async (record, newStatus) => {
    try {
      await axios.patch(
        `https://creditsea-loan-app-2.onrender.com/Loans/${record.key}`,
        { status: newStatus }
      );
      
      setLoanData(prevData => 
        prevData.map(item => 
          item.key === record.key ? { ...item, Action: newStatus } : item
        )
      );
    } catch (error) {
      console.error('Error updating loan status:', error);
    }
  };

  const menuItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '👥', label: 'Borrowers' },
    { icon: '💰', label: 'Loans' },
    { icon: '🔄', label: 'Repayments' },
    { icon: '⚙️', label: 'Loan Parameters' },
    { icon: '📈', label: 'Accounting' },
    { icon: '📊', label: 'Reports' },
    { icon: '🏦', label: 'Collateral' },
    { icon: '🔒', label: 'Access Configuration' },
    { icon: '💵', label: 'Savings' },
    { icon: '💸', label: 'Other Incomes' },
    { icon: '🧾', label: 'Payroll' },
    { icon: '💳', label: 'Expenses' },
    { icon: '✍️', label: 'E-Signature' },
    { icon: '👔', label: 'Investor Accounts' },
    { icon: '📅', label: 'Calender' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '🚪', label: 'Sign Out' }
  ];

  const stats = [
    { value: '50', label: 'LOANS' },
    { value: '100', label: 'BORROWERS' },
    { value: '550,000', label: 'CASH DISBURSED' },
    { value: '450,000', label: 'SAVINGS' },
    { value: '30', label: 'REPAID LOANS' },
    { value: '1,000,000', label: 'CASH RECEIVED' }
  ];

  return (
    <div className="verifier-dashboard">
      <Navbar isVerifier={true} />
      <div className="dashboard-layout">
        <div className={`sidebar ${menuState ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="profile-icon">👤</div>
            <span>John Okoh</span>
          </div>
          <div className="sidebar-menu">
            {menuItems.map((item, index) => (
              <button key={index} className="menu-item">
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="main-content">
          <div className="loans-section">
            <h2 className="section-title">Loans</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-info">
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="loans-table">
            <Table 
              columns={verifierColumns(handleStatusChange)} 
              dataSource={loanData} 
              title={() => "Applied Loans"} 
              pagination={{ position: ["bottomCenter"] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifierDashboard;