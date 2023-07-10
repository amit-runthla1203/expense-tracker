import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import Summary from "./components/Summary";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
