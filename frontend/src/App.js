
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <nav class="d-flex fixed-top justify-content-end p-2">
          <button className="btn float-right menuIcon" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </nav>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
      </Router>
      

     
       
    </div>
  );
}

export default App;
