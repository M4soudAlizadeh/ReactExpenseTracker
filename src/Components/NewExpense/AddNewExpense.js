const AddNewExpense = (props) => {
  const closeExpenseForm = () => {
    props.onClickAdd();
  };

  return <button onClick={closeExpenseForm}>Add New Expense</button>;
};
export default AddNewExpense;
