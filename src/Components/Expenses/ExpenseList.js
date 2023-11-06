import ExpenseMessage from "./ExpenseMessage";
import ExpenseItems from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <ExpenseMessage />;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
