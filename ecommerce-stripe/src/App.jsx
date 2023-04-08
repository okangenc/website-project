/*
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TakeMoney from "./TakeMoney";
import Success from "./Success";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/payment" />} />
        <Route path="/payment" element={<TakeMoney />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
*/

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
