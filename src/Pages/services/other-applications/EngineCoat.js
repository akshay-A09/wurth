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
import topBanner from '../../../Assets/Images/services/new/EngineCoat.jpg'
import Maintenance from '../../../Assets/Images/services/Maintenance.png'
import TotalProtection from '../../../Assets/Images/services/TotalProtection.png'
import CarRevives from '../../../Assets/Images/services/CarRevives.png'
 // Images End

  // About Count List 
  const ppfItemsData = [
    { 
      image: TotalProtection,
      tital: "Enhanced Aesthetics", 
      description: "A well-applied engine coat can give the engine bay a clean and polished appearance." 
    },
    { 
      image: Maintenance,
      tital: 'Improved Performance', 
      description: "Ensure optimal engine performance by protecting it from dirt, dust, and corrosion." 
    },
    { 
      image: CarRevives,
      tital: 'Ease of Cleaning', 
      description: 'An engine coat can make it easier to clean the engine bay.' 
    }

  ];
  // About Count List End

 


const EngineCoat = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Engine Coat | Services - Würth CAR-Haus';
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


 
 
  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Engine Coat'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Engine Coat</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Other Services</Link>
            <Link className='active'>Engine Coat</Link>
            </div>
            </div>
        </div>

        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Engine Coat</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Give your engine a makeover that goes beyond looks. Würth Engine Coat enhances aesthetics while boosting performance and simplifying cleaning.</b> </p>
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

export default EngineCoat