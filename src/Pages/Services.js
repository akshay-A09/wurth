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

// Images
import services from '../Assets/Images/topBanners/services.jpg'
import caWash from '../Assets/Images/services/car-wash.jpg'
import exteriorEnrich from '../Assets/Images/services/exterior-enrich.jpg'
import paintProtectionFilm2 from '../Assets/Images/services/paint-protection-film2.jpg'
import uvShield from '../Assets/Images/services/uv-shield.jpg'

// Services
import PaintProtectionFilm from '../Assets/Images/services/images/PaintProtectionFilm.jpg';
import EngineCoat from '../Assets/Images/services/images/EngineCoat.jpg';
import AlloyWheelPolish from '../Assets/Images/services/images/AlloyWheelPolish.jpg';
import RodentRepellent from '../Assets/Images/services/images/RodentRepellent.jpg';
import ServicePlus from '../Assets/Images/services/images/ServicePlus.jpg';
import EmblemCleaning from '../Assets/Images/services/images/EmblemCleaning.jpg';
import Acoustics4DSD from '../Assets/Images/services/images/Acoustics4DSD.jpg';
import CavityWaxProtection from '../Assets/Images/services/images/CavityWaxProtection.jpg';
import SilencerCoating from '../Assets/Images/services/images/SilencerCoating.jpg';
import carACEvaporator from '../Assets/Images/services/images/carACEvaporator.jpg';
import ACVentCleaning from '../Assets/Images/services/images/ACVentCleaning.jpg';
import WindshieldGlassPolish from '../Assets/Images/services/images/WindshieldGlassPolish.jpg';
import HeadLightRestoration from '../Assets/Images/services/images/HeadLightRestoration.jpg';
import UnderbodyRustOff from '../Assets/Images/services/images/UnderbodyRustOff.jpg';
import WurthCeraMaxx from '../Assets/Images/services/images/WurthCeraMaxx.jpg';
import WurthGlossSeal from '../Assets/Images/services/images/WurthGlossSeal.jpg';
import PaintRevive from '../Assets/Images/services/images/PaintRevive.jpg';
import ExteriorEnrich from '../Assets/Images/services/images/ExteriorEnrich.jpg';
import uvShield2 from '../Assets/Images/services/images/uvShield.jpg';
import BlueGreenWash from '../Assets/Images/services/images/BlueGreenWash.jpg';
import InterioClassy from '../Assets/Images/services/images/Interio-Classy.jpg';



// Services

// Images End



const Services = () => {
   
  // SEO Tags
  useEffect(() => {
    document.title = 'Services - Würth CAR-Haus';
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
  const servicesDataList = [
    {
      link: '/services/wurth-paint-protection-film',
      image: PaintProtectionFilm,
      title: 'Paint Protection Film',
    },
    {
      link: '/services/wurth-paint-protection-film',
      image: BlueGreenWash,
      title: 'Blue/Green Wash',
    },
    {
      link: '/',
      image: uvShield2,
      title: 'UV Shield',
    },
    {
      link: '/',
      image: ExteriorEnrich,
      title: 'Exterior Enrich',
    },
    {
      link: '/',
      image: PaintRevive,
      title: 'Paint Revive',
    },
    {
      link: '/',
      image: WurthGlossSeal,
      title: 'Wurth Gloss Seal',
    },
    {
      link: '/',
      image: WurthCeraMaxx,
      title: 'Wurth Cera-Maxx',
    },
    {
      link: '/',
      image: InterioClassy,
      title: 'Interio Classy/ZERO-b/ZERO-b Plus',
    },
    {
      link: '/',
      image: UnderbodyRustOff,
      title: 'Underbody Rust-Off (3/5 Years)',
    },{
      link: '/',
      image: WindshieldGlassPolish,
      title: 'Windshield/Glass Polish (F/F&R)',
    },
    {
      link: '/',
      image: HeadLightRestoration,
      title: 'HeadLight Restoration',
    },
    {
      link: '/',
      image: ACVentCleaning,
      title: 'AC Vent Cleaning (F/F&R)',
    },
    {
      link: '/',
      image: carACEvaporator,
      title: 'AC Evaporator Cleaning',
    },
    {
      link: '/',
      image: SilencerCoating,
      title: 'Silencer Coating',
    },
    {
      link: '/',
      image: CavityWaxProtection,
      title: 'Cavity Wax Protection',
    },
    {
      link: '/',
      image: Acoustics4DSD,
      title: 'Acoustics - 4 DSD',
    },
    {
      link: '/',
      image: EmblemCleaning,
      title: 'Emblem Cleaning',
    },
    {
      link: '/',
      image: ServicePlus,
      title: 'Service Plus',
    },
    {
      link: '/',
      image: RodentRepellent,
      title: 'Rodent Repellent ',
    },
    {
      link: '/',
      image: AlloyWheelPolish,
      title: 'Alloy Wheel Polish ',
    },
    {
      link: '/',
      image: EngineCoat,
      title: 'Engine Coat',
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
          <div className='itemListRow'>

          {servicesDataList.map((service, index) => (
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
