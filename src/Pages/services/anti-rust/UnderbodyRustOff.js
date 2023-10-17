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
import topBanner from '../../../Assets/Images/services/new/UnderbodyRustOff.jpg'
import BuilttoLast from '../../../Assets/Images/services/BuilttoLast.png'
import SelfHealingFilm from '../../../Assets/Images/services/SelfHealingFilm.png'
import TotalProtection from '../../../Assets/Images/services/TotalProtection.png'
import UnmatchedClarity from '../../../Assets/Images/services/UnmatchedClarity.png'
import ceraMaxx from '../../../Assets/Images/ceraMaxx.jpg'
// Images End


const UnderbodyRustOff = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Underbody Rust Off | Services - Würth CAR-Haus';
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
        {text: "Want their car's underbody rust-free"},
        {text: 'Live in harsh environmental conditions'},
        {text: 'Value their car'},
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
                    <h1 className='sizeH1 tu white'>Underbody Rust Off</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Anti Rust</Link>
            <Link className='active'>Underbody Rust Off</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Underbody Rust Off</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Defend your car against rust!</b> </p>
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
  <h4 className='sizeH3'>Ensure a strong foundation that lasts!</h4>
  <p><b>01.</b> Protects your car's underbody against rust and corrosion</p>
  <p><b>02.</b>Extreme protection for rust-prone areas </p>
  <p><b>03.</b> Ensuring car's structural integrity and longevity</p>

</div>

</div></section>

<section className='resultsCar'>
<div className='container center'>

<h3 className='sizeH4'>Underbody Rust Off - 3 years</h3>
<img src={ceraMaxx} />

</div>
</section>


<section className='svList lightgreyB'> <div className='container'>

<h3 className='sizeH3' data-aos="fade-up">Ideal for those who:</h3>

<ul className='svListCol' data-aos="fade-up">
{svListData.map((item, index) => (
  <li>{item.text}</li>
))}
</ul>


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

export default UnderbodyRustOff
