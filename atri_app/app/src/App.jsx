import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Product from "./pages/Product.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/menu" element={<Menu />} />
<Route path="/product" element={<Product />} />
    </Routes>
  );
}
