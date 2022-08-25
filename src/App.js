import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

  
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Tiolet Paper',
      amount: 94.12,
      date: new Date(2020,7, 14),
    },
    {
      id: 'e2',
      title: 'adapter',
      amount: 97.12,
      date: new Date(2020,7, 7),
    },
    {
      id: 'e3',
      title: 'earpiece',
      amount: 925.12,
      date: new Date(2021,3, 14),
    },
    {
      id: 'e4',
      title: 'newspaper',
      amount: 942.12,
      date: new Date(2022,7, 4),
    },
  ];

  
  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

  export default App;