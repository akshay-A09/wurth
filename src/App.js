import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './Assets/FontFamily.scss';
import './Assets/App.scss';
import ScrollToTop from './Components/ScrollTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import WurthPaintProtectionFilm from './Pages/services/WurthPaintProtectionFilm';
import Locations from './Pages/Locations';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import Products from './Pages/Products'
import Error from './Pages/Error';

function App() {
  return (
  <div className="App">
      
      <Router basename={''}>
      <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/services/wurth-paint-protection-film' element={<WurthPaintProtectionFilm/>} />
          <Route exact path='/locations' element={<Locations/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
          <Route exact path='/contact-us' element={<ContactUs/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </Router>
        
        
    
  </div>
  );
}

export default App;
