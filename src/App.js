//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      dateOfExpense: new Date(2021, 5, 10),
      description: "Car Repairs",
      amount: "$294.8",
    },
    {
      dateOfExpense: new Date(2021, 11, 10),
      description: "Statesman",
      amount: "$204.8",
    },
    {
      dateOfExpense: new Date(2021, 8, 12),
      description: "Statesman",
      amount: "$204.8",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        expense={expenses}
      />
    </div>
  );
}

export default App;
