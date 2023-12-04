import React, {useEffect} from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ServicesForm from '../../../Components/Forms/ServicesForm';

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Gspa End

// Images
import topBanner from '../../../Assets/Images/services/new/GreenWash.jpg'
import Redefine from '../../../Assets/Images/services/Redefine.png'
import CarRevives from '../../../Assets/Images/services/CarRevives.png'
import TotalProtection2 from '../../../Assets/Images/services/TotalProtection2.png'
// Images End
const GreenWash = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Green Wash | Services - Würth CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
  // SEO Tags End

  // GSPA
  useEffect(() => {
    Aos.init({duration: 400});
    gsap.registerPlugin(ScrollTrigger);

    
    const clickBoxG = gsap.timeline({
      duration: 3,
      scrollTrigger: {
        trigger: ".clickBox2",
        toggleActions: "play none none none",
        start: "top 90%",
        end: "+=30%",
        scrub: true,
      },
    });
    clickBoxG.to(".clickBox2 ", { clipPath: "inset(0 0 0% 0)" });
    
  }, []);
  // GSPA End

// About Count List 
  const ppfItemsData = [
    { 
      image: Redefine,
      tital: "Water Conservation", 
      description: "Green Wash uses less water compared to traditional car wash, making it eco-conscious." 
    },
    { 
      image: CarRevives,
      tital: 'Efficiency and Speed', 
      description: "It ensures a swift and efficient wash, saving you time and resources, along with exceptional results." 
    },
    { 
      image: TotalProtection2,
      tital: 'Reduced Runoff', 
      description: "There's minimal runoff of chemicals into the environment, contributing to a healthier ecosystem."
    }

  ];
// About Count List End
 
  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Green Wash'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Green Wash</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Car Wash</Link>
            <Link className='active'>Green Wash</Link>
            </div>
            </div>
        </div>

        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Green Wash</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Less Water, Same Results.</b> </h4>
              <p><b>Our Green Wash service allows you to enjoy a sparkling clean car while minimising water usage and environmental impact.</b> </p>
            </div>

            </div>
        </div>
      </section>

      <section className='aboutDataList aboutDataListS2' data-aos="fade-up">
      <div className='container'>
      <ul>
           {ppfItemsData.map((item, index) => (
          <li className='alignLeft' key={index}>
             <img src={item.image} alt={item.title} />
            <h3 className='sizeH5'>{item.tital}</h3>
            <p className='fontBold'>{item.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
 
<ServicesForm/>

<section className='checkoutSvr center' data-aos="fade-up">
  <div className='container'>
    <Link to='/services' className='btnS1 sizeH4 black'><FaArrowRight/> Check out our Services</Link>
  </div>
</section>

        <Footer/>
    </div>
  )
}

export default GreenWash
