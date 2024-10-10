
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Resume from './Pages/Resume';
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
        <Navbar contactRef={contactRef} homeRef={homeRef} resumeRef={resumeRef} portfolioRef={portfolioRef}/>
        <SidebarButton/>
       
        <Routes>
          <Route path="/" element={<Resume contactRef={contactRef} homeRef={homeRef} resumeRef={resumeRef} portfolioRef={portfolioRef}/>} /> 
        </Routes>
      </Router>
      

     
       
    </div>
  );
}

export default App;
