import "./ExpenseItem.css";

function ExpenseItem() {
  const ecpenseDate = new Date(2022, 2, 12);
  const expenseTitle = "car insurance";
  const expenseAmount = "$" + 31;

  return (
    <div className="expense-item">
      <h2>{ecpenseDate.toISOString()}</h2>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
