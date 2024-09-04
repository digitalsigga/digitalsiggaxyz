import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "./About";
import Nav from "../components/Nav"; // Ensure this import is correct
import Contact from "./Contact";
import Projects from "./Projects";
import Header from "../components/Header";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Routes>
        <Route path="/pages/About" element={<About />} />{" "}
        {/* Updated Route syntax */}
        <Route path="/pages/Contact" element={<Contact />} />{" "}
        {/* Updated Route syntax */}
        <Route path="/pages/Projects" element={<Projects />} />{" "}
        {/* Updated Route syntax */}
        <Route path="/pages/Home" element={<Home />} />{" "}
        {/* Updated Route syntax */}
        <Route path="/" element={<Home />} /> {/* Updated Route syntax */}
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
