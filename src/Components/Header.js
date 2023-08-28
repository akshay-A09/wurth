import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import WurthLogo from '../Assets/Images/wurth.png';


// Icons
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
// Icons End


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    // Check the scroll position and update the header state
    if (window.scrollY >= 1) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };

  // Add scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);


  // Get the current location
  const location = useLocation();


  return (
    <>
       <header className={isHeaderFixed ? 'fixed' : ''}>
        <div className='topNav'>
            <div className='container'>
              <div className='topNav_right'>
                <Link to='/'><FaPhoneAlt/> +91 22 6737 7600</Link>  
                <span>|</span>
                <Link to='/'>Franchise Enquiry</Link>
              </div>
              <div className='clearfix'></div>
            </div>
        </div>

        <div className='header'>
            <div className='container'>
              <div className='logo'>
                <Link to='/'><img src={WurthLogo} alt='Wurth' /></Link>
              </div>


              <div className={`menu_row ${isMenuOpen ? 'menu_open' : ''}`}>
            <div className="menu09">
              <nav>
                <ul className="afline">
                  <li>
                    <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
                  </li>
                  <li>
                    <Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                  </li>
                  <li>
                    <Link to='/locations' className={location.pathname === '/locations' ? 'active' : ''}>Locations</Link>
                  </li>
                  <li>
                    <Link to='/gallery' className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
                  </li>
                  <li to="/"className="mob_link">
                    <Link to='/contact-us' className={location.pathname === '/contact-us' ? 'active' : ''}>Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className="menu_btn" onClick={toggleMenu}>
                <div className="menubtn_o"><FaBars/></div>
                <div className="menubtn_c"><FaTimes/></div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>





            </div>
        </div>


       </header>


       <div className="topHeaderspace"></div>


    </>
  )
}

export default Header
 