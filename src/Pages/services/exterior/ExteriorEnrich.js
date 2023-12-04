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
import topBanner from '../../../Assets/Images/services/new/ExteriorEnrich.jpg'
import Value from '../../../Assets/Images/services/Value.png'
import Maintenance from '../../../Assets/Images/services/Maintenance.png'
import Gloss from '../../../Assets/Images/services/Gloss.png'
// Images End

const ExteriorEnrich = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Exterior Enrich | Services - Würth CAR-Haus';
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
      image: Gloss,
      tital: "Enhanced Natural Beauty", 
      description: "Elevate your car's appearance, making it look cleaner, shinier and more appealing." 
    },
    { 
      image: Value,
      tital: 'Preservation of Value', 
      description: "Exterior Enrich helps preserve your vehicle's value and retain its original condition." 
    },
    { 
      image: Maintenance,
      tital: 'Ease of Maintenance', 
      description: 'Treated surfaces are often easier to clean and maintain.' 
    }

  ];
  // About Count List End

 

  
  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Exterior Enrich'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Exterior Enrich</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Exterior</Link>
            <Link className='active'>Exterior Enrich</Link>
            </div>
            </div>
        </div>

        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Exterior Enrich</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Enhance your car's natural beauty.</b> </h4>
              <p><b>Preserve your car's appearance by protecting it from swirl marks, scratches, colour fading, dulling and more…</b> </p>
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

export default ExteriorEnrich
