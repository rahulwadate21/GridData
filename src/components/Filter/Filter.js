import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilter }) => {
  const [attribute, setAttribute] = useState('');
  const [value, setValue] = useState('');

  const handleAttributeChange = (e) => {
    setAttribute(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFilter) {
      onFilter(attribute, value);
    }
  };

  return (
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <select value={attribute} onChange={handleAttributeChange}>
          <option value="">Select Attribute</option>
          <option value="userId">User ID</option>
          <option value="id">ID</option>
          <option value="title">Title</option>
          <option value="body">Body</option>
        </select>
        <input
          type="text"
          value={value}
          onChange={handleValueChange}
          placeholder="Enter value"
        />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
