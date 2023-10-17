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
import topBanner from '../../../Assets/Images/services/new/GlossSeal.jpg'
import BuilttoLast from '../../../Assets/Images/services/BuilttoLast.png'
import SelfHealingFilm from '../../../Assets/Images/services/SelfHealingFilm.png'
import TotalProtection from '../../../Assets/Images/services/TotalProtection.png'
import UnmatchedClarity from '../../../Assets/Images/services/UnmatchedClarity.png'
import glossSeal from '../../../Assets/Images/glossSeal.jpg'
// Images End


const WurthGlossSeal = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'WÜRTH Gloss Seal | Services - WÜRTH CAR-Haus';
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
      image: SelfHealingFilm,
      tital: 'Enhances shine', 
      description: 'Your car will make heads turn by its captivating appearance.' 
    },
    { 
      image: UnmatchedClarity,
      tital: 'Shield for your car', 
      description: "Against environmental pollutants and other factors." 
    },
    { 
      image: BuilttoLast,
      tital: 'Maintains the gloss', 
      description: 'A finish that exudes elegance and beauty for a long time' 
    }

  ];
  // About Count List End

  
    // About Count List 
    const svListData = [
        {text: 'Car Lovers'},
        {text: 'Daily Drivers'},
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
                    <h1 className='sizeH1 tu white'>WÜRTH <br/> Gloss Seal</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Exterior</Link>
            <Link className='active'>WÜRTH Gloss Seal</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Wurth Gloss Seal</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>A gloss seal that shines and protects your vehicle’s paintwork<br></br>
              Reflect brilliance, defend beauty.</b></p>
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




   
   

    <style>
 {`
   .clickBox2::before {
     background-image: url(${topBanner});
   }
 `}
</style>


 

<section className='clickBox2'> <div className='container'>

<div className='clickBoxCol white'>
  <h4 className='sizeH3'>Process:</h4>
  <p><b>01.</b> Vehicle Inspection</p>
  <p><b>02.</b> Washing </p>
  <p><b>03.</b>Use Clay to remove Dust and Dirt</p>
  <p><b>04.</b>Compounding</p>
  <p><b>05.</b>Polishing</p>
  <p><b>06.</b>Polymer Coating</p>

</div>

</div></section>

<section className='svList lightgreyB'> <div className='container'>

<h3 className='sizeH4'>Wurth Gloss Seal is ideal for:</h3>

<ul className='svListCol' data-aos="fade-up">
{svListData.map((item, index) => (
  <li>{item.text}</li>
))}
</ul>


</div></section>


<section className='resultsCar'>
<div className='container center'>

<img src={glossSeal} />


</div>
</section>

<ServicesForm/>


        <Footer/>
    </div>
  )
}

export default WurthGlossSeal
