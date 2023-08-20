
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Resume from './Pages/Resume';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </Router>
      <Home/>

     
       
    </div>
  );
}

export default App;
