import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions, onDeleteTransaction }) {
  const mappedTransactions = transactions.map((transaction, index) => {
    return (
      <TransactionRow
        key={index}
        id={index}
        date={transaction.date}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
        onDelete={onDeleteTransaction}
      />
    );
  });

  return (
    <div className="mt-2">
      <table className="table table-striped text-center table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{mappedTransactions}</tbody>
      </table>
    </div>
  );
}

export default TransactionTable;