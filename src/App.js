import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './Assets/FontFamily.scss';
import './Assets/App.scss';
import ScrollToTop from './Components/ScrollTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import WurthPaintProtectionFilm from './Pages/services/exterior/WurthPaintProtectionFilm';
import WurthCeraMaxx from './Pages/services/exterior/WurthCeraMaxx';
import WurthGlossSeal from './Pages/services/exterior/WurthGlossSeal';
import ExteriorEnrich from './Pages/services/exterior/ExteriorEnrich';
import PaintRevive from './Pages/services/exterior/PaintRevive';
import UVShield from './Pages/services/exterior/UVShield';
import MicroBCleanPlus from './Pages/services/interior/MicroBCleanPlus';
import MicroBClean from './Pages/services/interior/MicroBClean';
import MicroClassy from './Pages/services/interior/MicroClassy';
import BlueWash from './Pages/services/car-wash/BlueWash';
import GreenWash from './Pages/services/car-wash/GreenWash';
import UnderbodyRustOff from './Pages/services/anti-rust/UnderbodyRustOff';
import UnderbodyRustOffXtreme from './Pages/services/anti-rust/UnderbodyRustOffXtreme';
import CavityWaxProtection from './Pages/services/anti-rust/CavityWaxProtection';
import ExhaustCoating from './Pages/services/anti-rust/ExhaustCoating';
import AcVentCleaning from './Pages/services/ac-services/AcVentCleaning';
import HeadLightRestoration from './Pages/services/other-applications/HeadLightRestoration';
import WindshieldPolish from './Pages/services/other-applications/WindshieldPolish';
import EmblemCleaning from './Pages/services/other-applications/EmblemCleaning';
import ServicePlus from './Pages/services/other-applications/ServicePlus';
import Acoustics4DSD from './Pages/services/other-applications/Acoustics4DSD';
import AlloyWheelPolish from './Pages/services/other-applications/AlloyWheelPolish';
import EngineCoat from './Pages/services/other-applications/EngineCoat';
import RodentRepellent from './Pages/services/other-applications/RodentRepellent';
import Locations from './Pages/Locations';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import Products from './Pages/Products';
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
          <Route exact path='/services/exterior/wurth-paint-protection-film' element={<WurthPaintProtectionFilm/>} />          
          <Route exact path='/services/exterior/wurth-cra-maxx' element={<WurthCeraMaxx/>} />
          <Route exact path='/services/exterior/wurth-gloss-seal' element={<WurthGlossSeal/>} />
          <Route exact path='/services/exterior/exterior-enrich' element={<ExteriorEnrich/>} />
          <Route exact path='/services/exterior/paint-revive' element={<PaintRevive/>} />
          <Route exact path='/services/exterior/uv-shield' element={<UVShield/>} />
          <Route exact path='/services/interior/micro-b-clean-plus' element={<MicroBCleanPlus/>} />
          <Route exact path='/services/interior/micro-b-clean' element={<MicroBClean/>} />
          <Route exact path='/services/interior/micro-classy' element={<MicroClassy/>} />
          <Route exact path='/services/car-wash/blue-wash' element={<BlueWash/>} />
          <Route exact path='/services/car-wash/green-wash' element={<GreenWash/>} />
          <Route exact path='/services/anti-rust/underbody-rust-off' element={<UnderbodyRustOff/>} />
          <Route exact path='/services/anti-rust/underbody-rust-off-xtreme' element={<UnderbodyRustOffXtreme/>} />
          <Route exact path='/services/anti-rust/cavity-wax-protection' element={<CavityWaxProtection/>} />
          <Route exact path='/services/anti-rust/exhaust-coating' element={<ExhaustCoating/>} />
          <Route exact path='/services/ac-services/ac-vent-cleaning' element={<AcVentCleaning/>} />
          <Route exact path='/services/other-applications/headlight-restoration' element={<HeadLightRestoration/>} />
          <Route exact path='/services/other-applications/windshield-polish' element={<WindshieldPolish/>} />
          <Route exact path='/services/other-applications/emblem-cleaning' element={<EmblemCleaning/>} />
          <Route exact path='/services/other-applications/service-plus' element={<ServicePlus/>} />
          <Route exact path='/services/other-applications/acoustics-4-dsd' element={<Acoustics4DSD/>} />
          <Route exact path='/services/other-applications/alloy-wheel-polish' element={<AlloyWheelPolish/>} />
          <Route exact path='/services/other-applications/engine-coat' element={<EngineCoat/>} />
          <Route exact path='/services/other-applications/rodent-repellent' element={<RodentRepellent/>} />
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
