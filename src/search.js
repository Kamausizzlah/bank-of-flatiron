import React from 'react';

function TransactionSearch({ onSearch, searchValue }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search your Recent Transactions"
        name="search"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default TransactionSearch;