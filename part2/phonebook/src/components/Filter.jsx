import React from 'react';

const Filter = ({ searchStr, handleSearch }) => (
  <div>
    filter shown with <input value={searchStr} onChange={handleSearch} />
  </div>
)

export default Filter;