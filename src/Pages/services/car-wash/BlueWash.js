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
import topBanner from '../../../Assets/Images/services/images/BlueGreenWash.jpg'
import Redefine from '../../../Assets/Images/services/Redefine.png'
import UnmatchedClarity from '../../../Assets/Images/services/UnmatchedClarity.png'
import Maintenance from '../../../Assets/Images/services/Maintenance.png'
// Images End

const BlueWash = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Blue Wash | Services - Würth CAR-Haus';
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
      tital: "Foam-Powered CLean", 
      description: "Enjoy a deep and effective clean with the power of foam." 
    },
    { 
      image: UnmatchedClarity,
      tital: 'Scratch-Free Shine', 
      description: "A gentle, yet effective technique to maintain your car's paint finish." 
    },
    { 
      image: Maintenance,
      tital: 'Protection and Maintenance', 
      description: 'It protects your car against environmental elements.' 
    }

  ];
  // About Count List End

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Blue Wash'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Blue Wash</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Car Wash</Link>
            <Link className='active'>Blue Wash</Link>
            </div>
            </div>
        </div>

        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Blue Wash</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Foam-Powered Cleaning Excellence.</b> </h4>
              <p><b>Experience the brilliance of Blue Wash to give your car the shining and cleaning it deserves.</b> </p>
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



 
      <style>
 {`
   .clickBox2::before {
     background-image: url(${topBanner});
   }
 `}
</style>



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

export default BlueWash
