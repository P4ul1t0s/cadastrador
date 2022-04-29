import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Entrar from './pages/Entrar';
import Principal from './pages/Principal';

function App() {
  return (
    <>
      {/* <div className="ret2"></div>
      <div className="ret1"></div> */}
      <section className="section">
        <main>
          <Router>
              <Routes>
                <Route exact path="/" element={<Home/>}/> 
                {/* <Route path="/home" element={<Home/>}/>  */}
                <Route path="/Cadastrar" element={<Cadastrar/>}/> 
                <Route path="/Entrar" element={<Entrar/>}/>   
                <Route path="/Principal" element={<Principal/>}/>   
              </Routes>
          </Router>
        </main>
      </section>
    </>
  );
}

export default App;