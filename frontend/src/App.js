
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import SidebarButton from './components/Sidebar/SidebarButton';
import React, { useRef} from 'react';


function App() {
  
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <div className="App">
      <Router>
        <Sidebar contactRef={contactRef} homeRef={homeRef} resumeRef={resumeRef} portfolioRef={portfolioRef}/>
        <SidebarButton/>
       
        <Routes>
          <Route path="/" element={<Home contactRef={contactRef} homeRef={homeRef} resumeRef={resumeRef} portfolioRef={portfolioRef}/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          
        </Routes>
      </Router>
      

     
       
    </div>
  );
}

export default App;
