import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/pages/About"
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App = () => {
  return (
   
    <div>
   
       <Router>
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
