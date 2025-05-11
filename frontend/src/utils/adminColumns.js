import { v4 as uuid } from 'uuid';

export const adminColumns = [
  {
    title: "User Details",
    dataIndex: "User Details",
    key: uuid(),
    render: (text) => <span className="user-details">{text}</span>
  },
  {
    title: "Customer name",
    dataIndex: "Customer name",
    key: uuid(),
    sorter: (a, b) => a['Customer name'].localeCompare(b['Customer name'])
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: uuid(),
    sorter: (a, b) => new Date(a.Date) - new Date(b.Date)
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: uuid(),
    render: (text) => {
      let statusClass = '';
      if (text === 'Approved') statusClass = 'status-approved';
      if (text === 'Rejected') statusClass = 'status-rejected';
      if (text === 'Pending') statusClass = 'status-pending';
      if (text === 'Verified') statusClass = 'status-verified';
      
      return <span className={`status-badge ${statusClass}`}>{text}</span>;
    }
  }
];