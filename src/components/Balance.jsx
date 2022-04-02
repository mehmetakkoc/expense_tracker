import { useContext } from "react";
import { GlobalContext } from "../context/GlobalStyles";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  const amounts = transactions.map(() => transactions.amount);

  const total = amounts
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
