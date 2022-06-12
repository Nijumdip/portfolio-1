import Header from "./Components/Header/Header";
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HireMe from "./Components/HireMe/HireMe";
import Nav from "./Components/Nav/Nav";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/hireMe" element={<HireMe />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    
  </>
  );
}

export default App;
