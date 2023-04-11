
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import Success from "./Success";

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
