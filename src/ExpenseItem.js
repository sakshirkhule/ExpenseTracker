import React from 'react';

function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <span>{expense.name}</span>
      <span>${expense.amount.toFixed(2)}</span>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;