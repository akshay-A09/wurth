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
import topBanner from '../../../Assets/Images/services/new/HighlightRestoration.jpg'

import Maintenance from '../../../Assets/Images/services/Maintenance.png'
import TotalProtection2 from '../../../Assets/Images/services/TotalProtection2.png'
import Esay from '../../../Assets/Images/services/Esay.png'
// Images End


const HeadLightRestoration = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Headlight Restoration | Services - Würth CAR-Haus';
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
      image: Maintenance,
      tital: "Enhanced Visibility", 
      description: "Eliminate cloudy and hazy headlights, improving your night-time visibility." 
    },
    { 
      image: TotalProtection2,
      tital: 'Safety First', 
      description: "Drive with confidence, knowing that your headlights are shining at their best." 
    },
    { 
      image: Esay,
      tital: 'Preserves Aesthetic Appeal', 
      description: 'Revive the look of your vehicle with rejuvenated headlights, enhancing its overall appearance.' 
    }

  ];
  // About Count List End

 

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Headlight Restoration'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Headlight Restoration</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Other Services</Link>
            <Link className='active'>Headlight Restoration</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Headlight Restoration</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Restore your car's headlights to their original brilliance and ensure safer driving experiences.</b> </p>
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

export default HeadLightRestoration