import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "./About";
import Nav from "../components/Nav"; // Ensure this import is correct
import Contact from "./Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Work from "./Work";
import DigitalFashion from "./work/digitalfashion";
import MaDesign from "./work/pastwork";

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
        <Route path="/pages/Work" element={<Work />} />{" "}
        {/* Updated Route syntax */}
        <Route path="/pages/Home" element={<Home />} />{" "}
        {/* Updated Route syntax */}
        <Route path="/" element={<Home />} /> {/* Updated Route syntax */}
        {/* Add more routes here */}
        <Route path="/work/digitalfashion" element={<DigitalFashion />} />
        <Route path="/work/pastwork" element={<MaDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
