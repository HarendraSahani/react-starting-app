import "./ExpenseDate.css";

function ExpenseDate(props) {

    const monthOfBuy = props.date.toLocaleString('en-US', {month :'long'});
    const dayOfBuy   = props.date.toLocaleString('en-US',{day : '2-digit'});
    const yearOfBuy  = props.date.getFullYear();
  
  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthOfBuy}</div>
      <div className="expense-date__day">{dayOfBuy}</div>
      <div className="expense-date__year">{yearOfBuy}</div>
    </div>
  );
}
export default ExpenseDate;