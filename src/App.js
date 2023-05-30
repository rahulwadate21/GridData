import React, { useState } from 'react';
import DataGrid from './components/DataGrid/DataGrid';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter/Filter';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (attribute, value) => {
    // Implement filtering logic
  };

  return (
    <div className="app">
      <h1>Data Grid Application</h1>
      <Filter onFilter={handleFilter} />
      <DataGrid />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
