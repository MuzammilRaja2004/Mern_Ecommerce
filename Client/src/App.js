import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import NewArrivals from './Components/NewArrivals';
import Deals from './Components/Deals';
import Contact from './Components/Contact';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
   </>
  );
}

export default App;
