
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import SidebarButton from './components/SidebarButton';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <SidebarButton/>
       
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
