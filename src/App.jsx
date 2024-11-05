import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useLocation, Routes, Route,useNavigate  } from "react-router-dom";
import Home from "./pages/HomePage";
import Product from "./pages/ProductPage";
import Cart from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage/index";
import PaymentConfirm from "./pages/PaymentPage/Components/PaymentConfirm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      // Read the session storage flag set in 404.html
      const wasRedirected = sessionStorage.getItem("redirectedFromProductPage");
      // console.log("wasRedirected: " + wasRedirected);
      if (wasRedirected) {
        sessionStorage.removeItem("redirectedFromProductPage");
        navigate('/product');
      }
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="payment/confirm" element={<PaymentConfirm />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
