import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Navbar from '../Navbar/Navbar';
import { adminColumns } from '../../utils/adminColumns';
import CustomTable from '../CustomTable/CustomTable'; 
import { Table } from 'antd';
import 'antd/dist/reset.css'; // for v5+
import { useAppSelector } from '../../utils/hooks';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [loanData, setLoanData] = useState([]);
  const menuState = useAppSelector(state => state.menu.state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://creditsea-loan-app-2.onrender.com/api/loans/many');
        const data = response.data.data || [];
        const result = data.map(item => ({
          'User Details': 'User details placeholder',
          'Customer name': item.fullName,
          'Date': item.dateApplied,
          'Action': item.loanStatus,
          'key': uuid()
        }));
        setLoanData(result);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <Navbar isUser={false} />
      <div className="dashboard-layout">
        <div className={`sidebar ${menuState ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="profile-icon">👤</div>
            <span>John Doe</span>
          </div>
          <div className="sidebar-menu">
            <button className="menu-item"><span>📊</span>Dashboard</button>
            <button className="menu-item"><span>👥</span>Borrowers</button>
            <button className="menu-item"><span>💰</span>Loans</button>
            <button className="menu-item"><span>🔄</span>Repayments</button>
            <button className="menu-item"><span>⚙️</span>Loan Parameters</button>
            <button className="menu-item"><span>📈</span>Accounting</button>
            <button className="menu-item"><span>📊</span>Reports</button>
            <button className="menu-item"><span>🏦</span>Collateral</button>
            <button className="menu-item"><span>🔒</span>Access Configuration</button>
            <button className="menu-item"><span>💵</span>Savings</button>
            <button className="menu-item"><span>💸</span>Other Incomes</button>
            <button className="menu-item"><span>🧾</span>Payroll</button>
            <button className="menu-item"><span>💳</span>Expenses</button>
            <button className="menu-item"><span>✍️</span>E-Signature</button>
            <button className="menu-item"><span>👔</span>Investor Accounts</button>
            <button className="menu-item"><span>📅</span>Calender</button>
            <button className="menu-item"><span>⚙️</span>Settings</button>
            <button className="menu-item"><span>🚪</span>Sign Out</button>
          </div>
        </div>
        <div className="main-content">
          <div className="loans-section">
            <h2 className="section-title">Loans</h2>
            <div className="stats-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-info">
                    <p className="stat-value">{item === 1 ? '50' : item === 2 ? '100' : item === 3 ? '550,000' : item === 4 ? '450,000' : item === 5 ? '30' : item === 6 ? '1,000,000' : item === 7 ? '200' : '30'}</p>
                    <p className="stat-label">
                      {item === 1 ? 'LOANS' : 
                       item === 2 ? 'BORROWERS' : 
                       item === 3 ? 'CASH DISBURSED' : 
                       item === 4 ? 'SAVINGS' : 
                       item === 5 ? 'REPAID LOANS' : 
                       item === 6 ? 'CASH RECEIVED' : 
                       item === 7 ? 'ACTIVE USERS' : 'REPAID LOANS'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        

           <div className="loans-table">
                <CustomTable 
                  columns={adminColumns} 
                  data={loanData} 
                  title="Recent Loans"
                />
              </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
