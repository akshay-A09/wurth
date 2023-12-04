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
import topBanner from '../../../Assets/Images/services/images/ACVentCleaning.jpg'
import Redefine from '../../../Assets/Images/services/Redefine.png'
import Value from '../../../Assets/Images/services/Value.png'
import Gloss from '../../../Assets/Images/services/Gloss.png'
// Images End
const AcVentCleaning = () => {

// SEO Tags
  useEffect(() => {
    document.title = 'AC Vent Cleaning | Services - Würth CAR-Haus';
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
    tital: "Enhances Air Quality", 
    description: "Enjoy cleaner, fresher air as our AC vent cleaning removes dust, allergens, and odours." 
  },
  { 
    image: Value,
    tital: 'Preserves Interior Condition', 
    description: "Maintain the pristine condition of your car's interior, preserving its resale value." 
  },
  { 
    image: Gloss,
    tital: 'Improves Cooling Efficiency', 
    description: 'A clean AC system functions more efficiently, providing you with better cooling during hot drives.' 
  }

];
// About Count List End


 

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='AC Vent Cleaning' />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>AC Vent <br/> Cleaning</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>AC Services</Link>
            <Link className='active'>AC Vent Cleaning</Link>
            </div>
            </div>
        </div>

        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">AC Vent Cleaning</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Get a fresh and comfortable car cabin.</b> </h4>
              <p><b>Revitalise your car's interior with our AC vent cleaning service.</b> </p>
            </div>

            </div>
        </div>
      </section>
      
      <section className='aboutDataList aboutDataListS2' data-aos="fade-up">
      <div className='container'>
      <ul>
      
           {ppfItemsData.map((item, index) => (
          <li className='alignLeft' key={index}>
             <img src={item.image} alt={item.image} />
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

export default AcVentCleaning