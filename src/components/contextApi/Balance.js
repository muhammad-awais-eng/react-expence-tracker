import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts, "asdas");
  const total = amounts
    .reduce((prevvalue, currentvalue) => (prevvalue += currentvalue), 0)
    .toFixed(2);
  console.log(total, "total");

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance"> ${total}</h1>
    </div>
  );
}

export default Balance;
