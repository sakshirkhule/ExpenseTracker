import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import BalanceTable from './BalanceTable';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);

  const handleBalanceChange = (e) => {
    const value = parseFloat(e.target.value);
    setBalance(value);
    setRemainingBalance(value - expenses.reduce((acc, exp) => acc + exp.amount, 0));
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setRemainingBalance(remainingBalance - expense.amount);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    const deletedExpense = expenses.find(expense => expense.id === id);
    setExpenses(updatedExpenses);
    setRemainingBalance(remainingBalance + deletedExpense.amount);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div>
        <label>Enter Your Balance: </label>
        <input 
          type="number" 
          value={balance} 
          onChange={handleBalanceChange} 
        />
      </div>
      <BalanceTable 
        balance={balance} 
        expenses={expenses} 
        remainingBalance={remainingBalance} 
      />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;