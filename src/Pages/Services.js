import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
// Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
// Slick

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs

// Images
import services from '../Assets/Images/topBanners/services.jpg'

// Services
import AlloyWheelPolish from '../Assets/Images/services/images/AlloyWheelPolish.jpg';
import ServicePlus from '../Assets/Images/services/images/ServicePlus.jpg';
import EmblemCleaning from '../Assets/Images/services/images/EmblemCleaning.jpg';
import Acoustics4DSD from '../Assets/Images/services/images/Acoustics4DSD.jpg';
import CavityWaxProtection from '../Assets/Images/services/images/CavityWaxProtection.jpg';
import ACVentCleaning from '../Assets/Images/services/images/ACVentCleaning.jpg';
import PaintRevive from '../Assets/Images/services/images/PaintRevive.jpg';
import uvShield2 from '../Assets/Images/services/images/uvShield.jpg';
import BlueGreenWash from '../Assets/Images/services/images/BlueGreenWash.jpg';
import CeraMaxx from '../Assets/Images/services/new/CeraMaxx.jpg';
import EngineCoat from '../Assets/Images/services/new/EngineCoat.jpg';
import ExaustCoating from '../Assets/Images/services/new/ExaustCoating.jpg';
import ExteriorEnrich from '../Assets/Images/services/new/ExteriorEnrich.jpg';
import GlossSeal from '../Assets/Images/services/new/GlossSeal.jpg';
import HighlightRestoration from '../Assets/Images/services/new/HighlightRestoration.jpg';
import MicroBClean from '../Assets/Images/services/new/MicroBClean.jpg';
import MicroBCleanPlus from '../Assets/Images/services/new/MicroBCleanPlus.jpg';
import MicroClassy from '../Assets/Images/services/new/MicroClassy.jpg';
import PPF from '../Assets/Images/services/new/PPF.jpg';
import RodentRepellent from '../Assets/Images/services/new/RodentRepellent.jpg';
import WindshieldPolish from '../Assets/Images/services/new/WindshieldPolish.jpg';
import GreenWash from '../Assets/Images/services/new/GreenWash.jpg';
import UnderbodyRustOff from '../Assets/Images/services/new/UnderbodyRustOff.jpg';
import UnderbodyRustOffXtreme from '../Assets/Images/services/new/UnderbodyRustOffXtreme.jpg';

// Services

// Images End



const Services = () => {
   
  // SEO Tags
  useEffect(() => {
    document.title = 'Services - WÜRTH CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
  // SEO Tags End

  // AOS
  useEffect(() => {
    Aos.init({duration: 400});
  }, []);
  // AOS END

  // Data for the services 
  const tabExterior = [
    {
      link: '/services/exterior/wurth-cra-maxx',
      image: CeraMaxx,
      title: 'WÜRTH Cera-Maxx',
    },
   
    {
      link: '/services/exterior/wurth-paint-protection-film',
      image: PPF,
      title: 'WÜRTH Paint Protection Film',
    },
  
    {
      link: '/services/exterior/wurth-gloss-seal',
      image: GlossSeal,
      title: 'WÜRTH Gloss Seal',
    },
    
    {
      link: '/services/exterior/exterior-enrich',
      image: ExteriorEnrich,
      title: 'Exterior Enrich',
    },
  
    {
      link: '/services/exterior/paint-revive',
      image: PaintRevive,
      title: 'Paint Revive',
    },
   
    {
      link: '/services/exterior/uv-shield',
      image: uvShield2,
      title: 'UV Shield',
    },
  
  ];
  
  const tabInterior = [
    {
      link: '/services/interior/micro-b-clean-plus',
      image: MicroBCleanPlus,
      title: 'Micro B clean plus',
    },
  
    {
      link: '/services/interior/micro-b-clean',
      image: MicroBClean,
      title: 'Micro B Clean',
    },
  
    {
      link: '/services/interior/micro-classy',
      image: MicroClassy,
      title: 'Micro Classy',
    },
  
  ];
  
  const tabCarWash = [
    {
      link: '/services/car-wash/blue-wash',
      image: BlueGreenWash,
      title: 'Blue Wash',
    },
  
    {
      link: '/services/car-wash/green-wash',
      image: GreenWash,
      title: 'Green Wash',
    },
  
  ];
  
  const tabAntiRust = [
    {
      link: '/services/anti-rust/underbody-rust-off',
      image: UnderbodyRustOff,
      title: 'Underbody Rust Off',
    },
  
    {
      link: '/services/anti-rust/underbody-rust-off-xtreme',
      image: UnderbodyRustOffXtreme,
      title: 'Underbody Rust Off X-treme',
    },
  
    {
      link: '/services/anti-rust/cavity-wax-protection',
      image: CavityWaxProtection,
      title: 'Cavity Wax Protection',
    },
  
    {
      link: '/services/anti-rust/exhaust-coating',
      image: ExaustCoating,
      title: 'Exhaust Coating',
    },
  
  ];
  
  const tabACservices = [
    {
      link: '/services/ac-services/ac-vent-cleaning',
      image: ACVentCleaning,
      title: 'A/C Vent Cleaning',
    },
  
  ];
  
  const tabOtherApplications = [
    {
      link: '/services/other-applications/headlight-restoration',
      image: HighlightRestoration,
      title: 'Headlight Restoration',
    },
  
    {
      link: '/services/other-applications/windshield-polish',
      image: WindshieldPolish,
      title: 'Windshield Polish',
    },
  
    {
      link: '/services/other-applications/emblem-cleaning',
      image: EmblemCleaning,
      title: 'Emblem Cleaning',
    },
  
    {
      link: '/services/other-applications/service-plus',
      image: ServicePlus,
      title: 'Service Plus',
    },
  
    {
      link: '/services/other-applications/acoustics-4-dsd',
      image: Acoustics4DSD,
      title: 'Acoustics-4 DSD',
    },
  
    {
      link: '/services/other-applications/alloy-wheel-polish',
      image: AlloyWheelPolish ,
      title: 'Alloy Wheel Polish',
    },
  
    {
      link: '/services/other-applications/engine-coat',
      image: EngineCoat,
      title: 'Engine Coat',
    },
  
    {
      link: '/services/other-applications/rodent-repellent',
      image: RodentRepellent,
      title: 'Rodent Repellent',
    },
  
  ];
  
  // Data for the services  End


  // Customers Reviews Slider
  const customersReviewsAboutSlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};
  // Customers Reviews Slider end

  // Customers Reviews
  const customersReviewsData = [
    {
      description: '"Carhaus exceeded my expectations. My car has never looked better!"', 
      name: 'Bhaskar G.',
    },
    {
      description: '"Carhaus exceeded my expectations. My car has never looked better!"', 
      name: 'Bhaskar G.',
    },
    {
      description: '"Carhaus exceeded my expectations. My car has never looked better!"', 
      name: 'Bhaskar G.',
    },
    {
      description: '"Carhaus exceeded my expectations. My car has never looked better!"', 
      name: 'Bhaskar G.',
    }


  ];

    // Customers Reviews End




  return (
    <>
          <Header/>

          <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={services} />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Services</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
                <Link to='/'>Home</Link>
                <Link className='active'>Services</Link>
            </div>
            </div>
        </div>


      <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow'>
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2'>Experience Premium Car Care Services at <br/><span className="red tu wp">Würth CAR<span className="fontBook">-Haus</span></span></h3>
            </div>
            <div className='aboutDataCol' data-aos="fade-up">
              <p><b>Our comprehensive range of premium services is designed to bring out the best in your vehicle, ensuring it stays in pristine condition inside and out.</b> </p>
            </div>

            </div>
        </div>
      </section> 



  <section className='itemList pT'>
      <div className='container'>

      <Tabs>
            <TabList>
            <Tab><span>EXTERIOR</span></Tab>
            <Tab><span>INTERIOR</span></Tab>
            <Tab><span>CAR WASH</span></Tab>
            <Tab><span>ANTI RUST</span></Tab>
            <Tab><span>A/C SERVICES</span></Tab>
            <Tab><span>OTHER APPLICATIONS</span></Tab>
            </TabList>

            <TabPanel className='tabExterior'>
            <div className='itemListRow'>
                {tabExterior.map((service, index) => (
                  <div className='itemListCol' key={index} data-aos="zoom-in">
                    <Link to={service.link} className='white'>
                      <div className='itemListColBg'>
                        <img src={service.image} alt={service.title} />
                      </div>
                        <div className='itemListColTxt'>
                          {service.title}
                          <div className='itemListColTxtIcon'><FaArrowRight/></div>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>  
            </TabPanel>

            <TabPanel className='tabInterior'>
            <div className='itemListRow'>
                {tabInterior.map((service, index) => (
                  <div className='itemListCol' key={index} data-aos="zoom-in">
                    <Link to={service.link} className='white'>
                      <div className='itemListColBg'>
                        <img src={service.image} alt={service.title} />
                      </div>
                        <div className='itemListColTxt'>
                          {service.title}
                          <div className='itemListColTxtIcon'><FaArrowRight/></div>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>  
            </TabPanel>

            <TabPanel className='tabCarWash'>
            <div className='itemListRow'>
                {tabCarWash.map((service, index) => (
                  <div className='itemListCol' key={index} data-aos="zoom-in">
                    <Link to={service.link} className='white'>
                      <div className='itemListColBg'>
                        <img src={service.image} alt={service.title} />
                      </div>
                        <div className='itemListColTxt'>
                          {service.title}
                          <div className='itemListColTxtIcon'><FaArrowRight/></div>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>  
            </TabPanel>

            <TabPanel className='tabAntiRust'>
            <div className='itemListRow'>
                {tabAntiRust.map((service, index) => (
                  <div className='itemListCol' key={index} data-aos="zoom-in">
                    <Link to={service.link} className='white'>
                      <div className='itemListColBg'>
                        <img src={service.image} alt={service.title} />
                      </div>
                        <div className='itemListColTxt'>
                          {service.title}
                          <div className='itemListColTxtIcon'><FaArrowRight/></div>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>  
            </TabPanel>


            <TabPanel className='tabACservices'>
            <div className='itemListRow'>
                {tabACservices.map((service, index) => (
                  <div className='itemListCol' key={index} data-aos="zoom-in">
                    <Link to={service.link} className='white'>
                      <div className='itemListColBg'>
                        <img src={service.image} alt={service.title} />
                      </div>
                        <div className='itemListColTxt'>
                          {service.title}
                          <div className='itemListColTxtIcon'><FaArrowRight/></div>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>  
            </TabPanel>


            <TabPanel className='tabOtherApplications'>
            <div className='itemListRow'>
                {tabOtherApplications.map((service, index) => (
                  <div className='itemListCol' key={index} data-aos="zoom-in">
                    <Link to={service.link} className='white'>
                      <div className='itemListColBg'>
                        <img src={service.image} alt={service.title} />
                      </div>
                        <div className='itemListColTxt'>
                          {service.title}
                          <div className='itemListColTxtIcon'><FaArrowRight/></div>
                        </div>
                    </Link>
                  </div>
                ))}
            </div>  
            </TabPanel>

      </Tabs>

      </div>
  </section>


  <section className='aboutData lightgreyB'>
        <div className='container'>
            <div className='aboutDataRow'>
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2'><span className="red tu">Why Choose</span>
<br/><span className=" tu">Car<span className="fontBook">-Haus</span></span></h3>
            </div>
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='m'>Quality and Expertise</h3>
              <p>At Carhaus, car care is an art we're passionate about. With unwavering commitment, our skilled professionals strive for perfection in every service. Whether restoring your vehicle's shine or rejuvenating its interior, we approach each task with precision and care. Your cherished vehicle is in the hands of true car care experts who treat it like their own.</p>

              <h3 className='m'>State-of-the-Art Equipment</h3>
              <p>We equip our team with the best tools in the industry. With cutting-edge technology and advanced equipment, we ensure superior paint protection, impeccable detailing, and efficient service delivery. When you choose Carhaus, you benefit from the combination of expert skills and modern automotive care technology.</p>


            </div>

            </div>
        </div>
      </section>




      <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow'>
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2'>Customers <br/><span className="red">Reviews</span></h3>
            </div>
            <div className='aboutDataCol' data-aos="fade-up">
              <p>Hear what customers have to say about their Carhaus experience</p>
            </div>
            </div>


            <div className='customersReviewsAbout' data-aos="fade-up">
            <Slider {...customersReviewsAboutSlider} className="customersReviewsAbout-slick slick-slider">

            {customersReviewsData.map((item, index) => (
            <div className='item' key={index}>
              <div className='customersReviewsDataCall'><div>
                <p>{item.description}</p>
                <h4>{item.name}</h4>
                </div>
              </div>
            </div>
            ))}

            </Slider>
            </div>





        </div>
      </section>





          <Footer/>
    </>
  )
}

export default Services
