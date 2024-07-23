import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Subscribe from "./pages/Subscribe/Subscribe";
import Shop from "./pages/Shop";
import Footer from "./components/Footer.js/Footer";
import Plans from "./pages/Plans";
import SubscriptionPage from "./pages/Subscribe/SubscriptionPage";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import HomePage from "./pages/HomePage";
import { Navigate } from "react-router-dom";
import Register from "./Auth/Register";
function App() {
  const token = localStorage.getItem('token');

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/subscribe" component={SubscriptionPage} />
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/page" element={token ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
