import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
    </Routes>
  );
}
