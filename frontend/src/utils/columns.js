import { v4 as uuid } from 'uuid';

export const Status = {
  PENDING: "Pending",
  VERIFIED: "Verified",
  REJECTED: "Rejected",
  APPROVED: "Approved"
};

export const columns = [
  {
    title: "Loan Officer",
    dataIndex: "Loan Officer",
    key: uuid(),
    sorter: (a, b) => a['Loan Officer'].localeCompare(b['Loan Officer'])
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: uuid(),
    sorter: (a, b) => parseFloat(a.Amount.replace(/,/g, '')) - parseFloat(b.Amount.replace(/,/g, ''))
  },
  {
    title: "Date Applied",
    dataIndex: "Date Applied",
    key: uuid(),
    sorter: (a, b) => new Date(a['Date Applied']) - new Date(b['Date Applied'])
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: uuid(),
    render: (text) => {
      let statusClass = '';
      if (text === Status.APPROVED) statusClass = 'status-approved';
      if (text === Status.REJECTED) statusClass = 'status-rejected';
      if (text === Status.PENDING) statusClass = 'status-pending';
      if (text === Status.VERIFIED) statusClass = 'status-verified';
      
      return <span className={`status-badge ${statusClass}`}>{text}</span>;
    }
  }
];