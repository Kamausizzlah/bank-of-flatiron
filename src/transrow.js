import React from 'react';

function TransactionRow({ date, description, category, amount, id, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TransactionRow;