import React, { useState } from 'react';

function TransactionForm({ onSubmit }) {
  const [inputs, setInputs] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
    setInputs({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };

  return (
    <form className="row g-2 mt-2 mx-auto p-2" style={{ border: '1px solid lightgrey' }} onSubmit={handleSubmit}>
      <div className="col-md-3 d-flex align-items-center">
        <label className="me-2">Date:</label>
        <input type="date" className="form-control" name="date" value={inputs.date} onChange={handleChange} required />
      </div>
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Description" name="description" value={inputs.description} onChange={handleChange} required />
      </div>
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Category" name="category" value={inputs.category} onChange={handleChange} required />
      </div>
      <div className="col-md-3">
        <input type="number" className="form-control" placeholder="Amount" name="amount" value={inputs.amount} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-secondary col-md-2 mx-auto">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;