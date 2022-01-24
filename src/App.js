// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import "./App.css";
import Home from "./Pages/Home";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />}/>
          <Route path="/transactions/:index/edit" element={<Edit/>} />
          <Route path="/transactions/:index" element={<Show />}/>
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
