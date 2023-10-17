import React, {useEffect} from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ServicesForm from '../../../Components/Forms/ServicesForm';
// Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
// Slick

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
import BuilttoLast from '../../../Assets/Images/services/BuilttoLast.png'
import SelfHealingFilm from '../../../Assets/Images/services/SelfHealingFilm.png'
import TotalProtection from '../../../Assets/Images/services/TotalProtection.png'
import UnmatchedClarity from '../../../Assets/Images/services/UnmatchedClarity.png'
import ceraMaxx from '../../../Assets/Images/ceraMaxx.jpg'
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
    const svListData = [
        {text: 'Unrivalled Protection'},
        {text: 'Flawless Appearance'},
        {text: 'Scratch Resistance'},
        {text: 'Easy Maintenance'},
        {text: 'Longevity'},
      ];
      // About Count List End
    

  // Customers Reviews
  const customersAdvantagesData = [
    {text: 'Guardian of Perfect',},
    {text: 'Preserve Resale Value',},
    {text: 'Easy Maintenance',},
    {text: 'Lasting Investment',},
  ];
  // Customers Reviews End


  // Customers Reviews
  const ChooseYourShieldData = [
    {
      link: '/',
      title: '01. Basic Coverage',
      description: 'Front bumper, partial hood, side mirrors, and door edges.',
    }, 
    {
      link: '/',
      title: '02. Premium Coverage',
      description: 'Full hood, front bumper, side mirrors, door edges, and rear bumper.',
    }, 
    {
      link: '/',
      title: '03. Ultimate Coverage',
      description: 'Full car coverage - every vulnerable area protected with Wurth PPF',
    }, 
  ];
  // Customers Reviews End
  
  

  // About Count List 
  const ChooseYourShieldCol = [
    { 
      image: SelfHealingFilm,
      tital: 'Claying', 
    },
    { 
      image: UnmatchedClarity,
      tital: 'Compound - P10 ', 
    },
    { 
      image: BuilttoLast,
      tital: 'Compound - P20', 
      
    },
    { 
      image: TotalProtection,
      tital: 'Glaze Polish - P30', 
         
    },
    { 
        image: SelfHealingFilm,
        tital: 'Ceramic Coating Application', 
      }

  ];
  // About Count List End
  


  // About Count List 
  const choosLevelsData = [
    { 
      tital: 'Ceramic Brilliance Package Single Layer Ceramic Coating 1-Year Warranty', 
    },
    { 
      tital: 'Diamond Brilliance Package Multi-Layer Ceramic Coating 3-Year Warranty Additional Scratch-Resistant Layer', 
    },
    { 
      tital: 'Signature Brilliance Package Multi-Layer Ceramic Coating 5-Year Warranty Enhanced Scratch Resistance Self-Cleaning Effect' 
    }
  ];
  // About Count List End

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} />
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
              <h4><b>Sustainable Car Care for a Better Tomorrow</b> </h4>
              <p><b>Our Green Wash service allows you to enjoy a sparkling clean car while minimising water usage and environmental impact...</b> </p>
            </div>

            </div>
        </div>
      </section>

  

  <style>
{`
.clickBox2::before {
  background-image: url(${topBanner});
}
`}
</style>

<section className='clickBox2'> <div className='container'>

<div className='clickBoxCol white'>
  <h4 className='sizeH3'>What does Green Wash Offer?</h4>
  <p><b>01.</b>Water Conservation: Green Wash uses less water compared to traditional car wash, making it eco-conscious.</p>
  <p><b>02.</b>Efficiency and Speed: It ensures a swift and efficient wash, saving you time and resources, along with exceptional results.</p>
  <p><b>03.</b>Reduced Runoff: There's minimal runoff of chemicals into the environment, contributing to a healthier ecosystem.</p>

</div>

</div></section>


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
