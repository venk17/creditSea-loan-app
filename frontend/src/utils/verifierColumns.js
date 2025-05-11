import { v4 as uuid } from 'uuid';
import { Status } from './columns';

export const verifierColumns = (handleStatusChange) => [
  {
    title: "User Recent Activity",
    dataIndex: "User Recent Activity",
    key: uuid(),
    render: (text) => <span className="activity-indicator">{text}</span>
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
    render: (text, record) => {
      if (text !== Status.PENDING) {
        return <span className={`status-badge status-${text.toLowerCase()}`}>{text}</span>;
      }
      
      return (
        <div className="verifier-actions">
          <button 
            className="verify-btn"
            onClick={() => handleStatusChange(record, Status.VERIFIED)}
          >
            Verify
          </button>
          <button 
            className="reject-btn"
            onClick={() => handleStatusChange(record, Status.REJECTED)}
          >
            Reject
          </button>
        </div>
      );
    }
  }
];