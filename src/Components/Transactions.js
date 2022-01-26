// Index Page
// I can see a list of income and expenditures with the date,
// the transaction name and the amount on the Index page.
// There is also an Account total visible that sums all the different expenditures
// and shows the user how much money they currently have.

import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";
import { Table } from "react-bootstrap";

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
    .map((transaction) => transaction.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);
  
  let colorChange = () => {
    if(accountTotal < 0) {
      return (
        <h1 id="bank-account-total" className="negative-account">
          Bank Account Total: {accountTotal}
        </h1>
      )
    }
    else if(accountTotal > 1000) {
      return (
        <h1 id="bank-account-total" className="positive-account">
          Bank Account Total: {accountTotal}
        </h1>
      )
    }
    else {
      return (
        <h1 id="bank-account-total" className="neutral-account">
          Bank Account Total: {accountTotal}
        </h1>
      )
    }
  }



  return (
    <div className="Transactions">
      <div className="transaction-headers">
        <h2 id="transaction">Transactions Page</h2>
        {colorChange()}
      </div>
      <section>
        <Table striped border="true" hover>
          <thead>
            <tr>
              <th>Date:</th>
              <th>Name:</th>
              <th>Amount:</th>
            </tr>
          </thead>
          <tbody>{allTransactions}</tbody>
        </Table>
      </section>
    </div>
  );
}

export default Transactions;
