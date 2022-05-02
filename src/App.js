import './structureStyles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Sigin from './pages/logs/Sigin';
import Login from './pages/logs/Login';
import Dashboard from './pages/dashboard/page/Dashboard';

function App() {
  return (
    <>
      <section className="section">
        <main>
          <Router>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sigin" element={<Sigin/>}/> 
                <Route path="/login" element={<Login/>}/>   
                <Route path="/dashboard" element={<Dashboard/>}/>   
              </Routes>
          </Router>
        </main>
      </section>
    </>
  );
}

export default App;