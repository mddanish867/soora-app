import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Favorites from "./components/favorits/Favorites";
import Auth from "./components/auth/Auth";
import Checkout from "./components/checkout/Checkout";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import OrderConfirmation from "./components/orders/OrderConfirmation";
import OrderHistory from "./components/orders/OrderHistory";
import ProfileSettings from "./components/auth/ProfileSettings";

function App() {

  return (
    <>
    <Router>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/order-confirmation" element={<OrderConfirmation/>} />
      <Route path="/order-history" element={<OrderHistory/>} />
      <Route path="/profile-settings" element={<ProfileSettings/>} />

      </Routes>
    </Router>
   
    </>
  )
}

export default App
