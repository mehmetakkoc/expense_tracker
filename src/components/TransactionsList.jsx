import { useContext } from "react";
import { GlobalContext } from "../context/GlobalStyles";
import Transactions from "./Transactions";

const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => (
          <Transactions key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
