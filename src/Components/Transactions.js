// Index Page
// I can see a list of income and expenditures with the date,
// the transaction name and the amount on the Index page.
// There is also an Account total visible that sums all the different expenditures
// and shows the user how much money they currently have.

import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        console.log(res.data);
        setTransactions(res.data)
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  let allTransactions = transactions.map((transaction, index) => {
    return <Transaction key={index} transaction={transaction} index={index} />;
  });

  return (
    <div className="Transactions">
      <h1>Bank Account Total:</h1>
      <div>{allTransactions}</div>
    </div>
  );
}

export default Transactions;
