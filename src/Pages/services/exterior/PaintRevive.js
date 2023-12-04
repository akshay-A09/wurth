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
import topBanner from '../../../Assets/Images/services/images/PaintRevive.jpg'
import Value from '../../../Assets/Images/services/Value.png'
import Esay from '../../../Assets/Images/services/Esay.png'
import Defends from '../../../Assets/Images/services/Defends.png'


// Images End


const PaintRevive = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Paint Revive | Services - Würth CAR-Haus';
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
      image: Esay,
      tital: "Revitalized Finish", 
      description: "Removing imperfections, dullness and scratches, leaving it with a glossy, like-new look." 
    },
    { 
      image: Defends,
      tital: 'Enhanced Driving Experience', 
      description: "Enjoy a visually appealing car and take pride in your vehicle." 
    },
    { 
      image: Value,
      tital: 'Increased Resale Value', 
      description: 'Potential buyers are often willing to pay more for a vehicle that looks well-cared-for.' 
    }

  ];
  // About Count List End

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Paint Revive' />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Paint Revive</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Exterior</Link>
            <Link className='active'>Paint Revive</Link>
            </div>
            </div>
        </div>


        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Paint Revive</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Revive your worn-out paint.</b> </h4>
              <p><b>Turn back the time for your car by removing imperfections, dullness and scratches that give it a revitalised and glossy finish.</b> </p>
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

export default PaintRevive
