import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import budgetLogo from "./budgetLogo.png"



export default function NavbarDisplay() {
  return (
    <nav className="NavBar">
        <Link to="/transactions"><img src={budgetLogo}/></Link>
      <Button variant="outline-success" size="sm" className="col-4" as={Link} to={"/transactions/new"}>
        New Transaction
      </Button>
    </nav>
  );
}
