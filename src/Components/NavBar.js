import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>
        <Link to="/transactions">Budget App</Link>
      </h1>
        <button>
          <Link to="/transactions/new">New Transaction</Link>
        </button>
    </div>
  );
}
