import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <div className="Transaction">
      <div>{transaction.date}</div>
      <div><Link to={`/transactions/${index}`}>{transaction.name}</Link></div>
      <div>{transaction.amount}</div>
    </div>
  );
}

export default Transaction;