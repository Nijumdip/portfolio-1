import Header from "./Components/Header/Header";
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HireMe from "./Components/HireMe/HireMe";


function App() {
  return (
    <>
    <Header />
    <HireMe />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  </>
  );
}

export default App;
