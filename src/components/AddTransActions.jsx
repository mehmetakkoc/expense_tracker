import { useState } from "react";

const AddTransActions = () => {
  const add
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random() * 100,
      text: text,
      amount: amount,
    };
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransActions;
