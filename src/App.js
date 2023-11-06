import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id: "e1", title: "but book", amount: "20", date: new Date(2019, 12, 12) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (reciveExpenseData) => {
    setExpenses((prevExpenses) => {
      return [reciveExpenseData, ...prevExpenses];
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
