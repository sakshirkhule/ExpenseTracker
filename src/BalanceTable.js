import React from 'react';

function BalanceTable({ balance, expenses, remainingBalance }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <table className="balance-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Initial Balance</td>
          <td>${balance.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total Expenses</td>
          <td>${totalExpenses.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Remaining Balance</td>
          <td>${remainingBalance.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BalanceTable;