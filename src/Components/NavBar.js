import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <h1>
        <Link to="/transactions">Budget App</Link>
      </h1>
        <button id="new-transactions-button">
          <Link to="/transactions/new">New Transaction</Link>
        </button>
    </div>
  );
}
