import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalStyles";

const Transactions = ({ item }) => {
  const { deleteBtn } = useContext(GlobalContext);

  const sign = item.amount < 0 ? "-" : "+";

  return (
    <div>
      <li className={item.amount > 0 ? "plus" : "minus"}>
        {item.text}{" "}
        <span>
          {sign}${Math.abs(item.amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteBtn(item.id)}>
          x
        </button>
      </li>
    </div>
  );
};

export default Transactions;
