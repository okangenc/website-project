import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// for the stripe payment functionality
import Payment from "./stripe/Payment";
import Success from "./stripe/Success";

// import useSelector from react redux
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/category/:category" element={<CategoryPage />} />
        <Route exact path="/product/:id" element={<ProductPage />} />
        <Route exact path="/register" element={user ? <Navigate to="/" replace /> : <RegisterPage />} />
        <Route exact path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route exact path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />

      </Routes>
    </Router>
  );
};

export default App;

