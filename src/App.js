import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr/>
        <Routes>
          <Route path='/' element={<Home/>}/>

        </Routes>
        
      
      

      </Router>
      </div>
     
  );
}

export default App;
