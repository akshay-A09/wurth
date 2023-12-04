import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
// Images
import locations from '../Assets/Images/topBanners/locations.jpg'
import map from '../Assets/Images/map.jpg'
import { FaArrowRight } from 'react-icons/fa';
// Images End

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End

const Locations = () => {
        
  // SEO Tags
  useEffect(() => {
    document.title = 'Locations - WÜRTH CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
  // SEO Tags End

      
  // GSPA
  useEffect(() => {
  Aos.init({duration: 400});
  }, []);
  // GSPA End


  // Locations
  const LocationsData = [
    { 
        link: '#Salem',
        tabId: 'Salem',
        Title: 'Salem, India', 
        Address: 'Salem, India',
        Contact: '1800 000 0000', 
        OperatingHours: '10am-7pm',
        MapImage: map 
    },
    { 
        link: '#Mumbai',
        tabId: 'Mumbai',
        Title: 'Mumbai, India', 
        Address: 'Salem, India',
        Contact: '1800 000 0000', 
        OperatingHours: '10am-7pm', 
        MapImage: map 

    },
    { 
        link: '#Thane',
        tabId: 'Thane',
        Title: 'Thane, India', 
        Address: 'Salem, India',
        Contact: '1800 000 0000', 
        OperatingHours: '10am-7pm',
        MapImage: map 

    },
  ];
  // Locations End
  
  const [activeTab, setActiveTab] = useState(LocationsData[0].tabId);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(LocationsData); // Initialize with all data
  const [searchError, setSearchError] = useState(false); // State for showing error message

  const handleSearchInputChange = event => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter location data based on search term
    const filteredResults = LocationsData.filter(item =>
      item.Title.toLowerCase().includes(value.toLowerCase())
    );

    // Update search results and show/hide error message
    setSearchResults(filteredResults);
    setSearchError(filteredResults.length === 0); // Show error if no results
  };

  return (
    <>
    <Header/>

    <section className='topBanner'>
        <div className='topBannerImg'>
            <img src={locations} alt="locations"/>
        </div>
        <div className='topBannerText'>
            <div className='container'>
                <h1 className='sizeH1 tu white'>Locations</h1>
            </div>
        </div>
    </section>

    <div className='breadcrumbNav'>
        <div className='container'>
          <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link className='active'>Locations</Link>
          </div>
        </div>
    </div>
      
    

    <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow'>
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2'><span className='red'>Explore <br/>Our Showrooms</span> <br/>Across India </h3>
            </div>
            <div className='aboutDataCol' data-aos="fade-up">
              <p>At <span className="red tu bold">Würth CAR<span className="fontBook">-Haus</span></span>, we're here to provide exceptional car care across India. <br/>Explore our showrooms, find the nearest location, and experience automotive luxury like never before. </p>
            </div>

            </div>
        </div>
      </section>



      <section className='LocationMap'>
        <div className='container'>
          <div className='LocationMapRow'>
            <div className='LocationMapTabNav'>
              <div className='LocationMapTabNavSearch'>
                <input
                  type='search'
                  name='gsearch'
                  placeholder='Search for a location'
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                />
                {searchError && (
                  <div className='error-message'>No matching locations found.</div>
                )}
                {searchResults.length > 0 && (
                  <div className='search-results'>
                    <div className='search-resultsIn'>
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.link}
                        onClick={() => setActiveTab(result.tabId)}
                        className={activeTab === result.tabId ? 'active' : ''}
                      >
                        <div className='search-result'>
                          <h4>{result.Title}</h4>
                          <p>Address: {result.Address}</p>
                          <p>Contact: {result.Contact}</p>
                          <p>Operating Hours: {result.OperatingHours}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  </div>
                )}
             
              </div>
            </div>
            <div className='LocationMapCont'>
              {LocationsData.map((item, index) => (
                <div
                  className={`LocationMapContBg ${
                    activeTab === item.tabId ? 'active' : ''
                  }`}
                  id={item.tabId}
                  key={index}
                >
                  <img src={item.MapImage} alt={item.MapImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className='checkoutSvr center' data-aos="fade-up">
        <div className='container'>
            <Link to='/services' className='btnS1 sizeH4 black'><FaArrowRight/> Check out our Services</Link>
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default Locations
