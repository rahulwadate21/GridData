import React, { useState, useEffect } from 'react';
import './DataGrid.css';
import { fetchData } from '../../services/api';

const DataGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataGrid = async () => {
      const response = await fetchData();
      setData(response.data);
    };

    fetchDataGrid();
  }, []);

  return (
    <div className="data-grid">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
