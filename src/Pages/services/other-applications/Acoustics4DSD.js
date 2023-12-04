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
import topBanner from '../../../Assets/Images/services/images/Acoustics4DSD.jpg'
import TotalProtection from '../../../Assets/Images/services/TotalProtection.png'
import Maintenance from '../../../Assets/Images/services/Maintenance.png'
import Redefine from '../../../Assets/Images/services/Redefine.png'
import Esay from '../../../Assets/Images/services/Esay.png'
// Images End


  // About Count List 
  const ppfItemsData = [
    { 
      image: TotalProtection,
      tital: "Immersive Sound", 
      description: "Immerse yourself in a world of crystal-clear audio, where every note and beat comes to life with Acoustics-4 DSD." 
    },
    { 
      image: Maintenance,
      tital: 'Vibration Control', 
      description: "Experience reduced sound from door and panel vibrations, minimizing unwanted distractions on the road." 
    },
    { 
      image: Redefine,
      tital: 'Preserve Sound Quality', 
      description: "Maintain the pristine quality of your vehicle's sound system, ensuring a listening experience that stands the test of time." 
    },
    { 
      image: Esay,
      tital: 'For Music Lovers', 
      description: "Acoustics-4 DSD offers unparalleled sound quality for music lovers on the road." 
    }

  ];
  // About Count List End


const Acoustics4DSD = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Acoustics-4 DSD | Services - Würth CAR-Haus';
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
                <img src={topBanner} />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Acoustics-4 DSD</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Other Services</Link>
            <Link className='active'>Acoustics-4 DSD</Link>
            </div>
            </div>
        </div>


        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Acoustics-4 DSD</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Minimise unwanted vibration and panel sounds elevating your driving experience.</b> </p>
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

export default Acoustics4DSD