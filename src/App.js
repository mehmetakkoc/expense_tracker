import "./App.css";
import AddTransActions from "./components/AddTransActions";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";

import TransactionsList from "./components/TransactionsList";
import { GlobalProvider } from "./context/GlobalStyles";

function App() {
  return (
    <GlobalProvider>
      {" "}
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransActions />
      </div>
    </GlobalProvider>
  );
}

export default App;
