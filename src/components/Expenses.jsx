import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
function Expenses(props) {
    
    return (
      <div className="expenses">
    
        <ExpenseItem
          dateOfExpense={props.expense[0].dateOfExpense}
          description={props.expense[0].description}
          amount={props.expense[0].amount}
        />
        <ExpenseItem
          dateOfExpense={props.expense[1].dateOfExpense}
          description={props.expense[1].description}
          amount={props.expense[1].amount}
        />
        <ExpenseItem
          dateOfExpense={props.expense[2].dateOfExpense}
          description={props.expense[2].description}
          amount={props.expense[2].amount}
        />
      </div>
    );
  }
  
  export default Expenses;