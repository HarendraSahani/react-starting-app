import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.dateOfExpense}/>
      <div className="expense-item__description">
        <h2>{props.description}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
