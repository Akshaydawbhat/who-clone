// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';
import './Style.css'
import HealthTopic from './components/HealthTopic/HealthTopic';
import About from './components/About/About';
import Footer from './footer/Footer';


const App = () => {
    return (
      <Router>
        <div>
            <Navbar/>
            {/* <Link to="/">Navbar</Link> */}

          {/* <nav>
            <ul>
              <li>
                <Link to="/">Navbar</Link>
              </li>
              <li>
                <Link to="/HomePage">HomePage</Link>
              </li>
            </ul>
          </nav> */}
  
          <Routes>
            {/* <Route path="/" element={<Navbar />} /> */}
            <Route path="/HomePage" element={<HomePage />} />
            <Route path='/HealthTopic' element={<HealthTopic/>}  />
            <Route path='/About' element={<About/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  };
  
  export default App;
  