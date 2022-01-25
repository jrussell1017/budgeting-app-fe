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
        setTransactions(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  let allTransactions = transactions.map((transaction, index) => {
    return <Transaction key={index} transaction={transaction} index={index} />;
  });

  let accountTotal = transactions
    .map((transaction) => Number(transaction.amount))
    .reduce((a, b) => a + b, 0);
  console.log(accountTotal);

  return (
    <div className="Transactions">
      <h1 id="bank-account-total">
        Bank Account Total: {Number(accountTotal)}
      </h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date:</th>
              <th>Name:</th>
              <th>Amount:</th>
            </tr>
          </thead>
          <tbody>{allTransactions}</tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
