import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";
import AddNewExpense from "./AddNewExpense";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [active, setActive] = useState("notActive");

  const clickCancel = () => {
    setActive("notActive");
  };
  const clickAdd = () => {
    setActive("active");
  };

  const addOrCloseExpenseForm =
    active === "notActive" ? (
      <AddNewExpense onClickAdd={clickAdd} />
    ) : (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClickCancel={clickCancel}
      />
    );

  return <Card className="new-expense">{addOrCloseExpenseForm}</Card>;
};
export default NewExpense;
