import React from 'react';
import './CustomTable.css';

const CustomTable = ({ columns, data, title }) => {
  return (
    <div className="custom-table-container">
      {title && <h3 className="table-title">{typeof title === 'function' ? title() : title}</h3>}
      
      <div className="custom-table-scroll">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key || column.dataIndex} className="table-header">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={row.key || rowIndex} className="table-row">
                {columns.map((column) => (
                  <td key={column.key || column.dataIndex} className="table-cell">
                    {column.render 
                      ? column.render(row[column.dataIndex], row, rowIndex)
                      : row[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;