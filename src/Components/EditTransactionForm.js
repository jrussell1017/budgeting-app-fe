import axios from "axios";
import { useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditTransactionForm() {
  const navigate = useNavigate();
  const { index } = useParams();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        navigate(`/transactions`);
      })
      .catch((err) => {
        navigate("/not-found");
      });
  };


  return (

    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          value={transaction.date}
          onChange={handleTextChange}
          placeholder="Date"
          type="text"
          required
        />
        <br />
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={transaction.name}
          onChange={handleTextChange}
          placeholder="Name"
          type="text"
          required
        />
        <br />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="0"
          type="number"
          required
        />
        <br />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="From"
          type="text"
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="Category"
          type="text"
          required
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default EditTransactionForm;
