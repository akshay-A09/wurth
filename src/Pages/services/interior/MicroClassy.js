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
import topBanner from '../../../Assets/Images/services/new/MicroClassy.jpg'
import BuilttoLast from '../../../Assets/Images/services/BuilttoLast.png'
import SelfHealingFilm from '../../../Assets/Images/services/SelfHealingFilm.png'
import TotalProtection from '../../../Assets/Images/services/TotalProtection.png'
import UnmatchedClarity from '../../../Assets/Images/services/UnmatchedClarity.png'

// Images End


const MicroClassy = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Micro Classy | Services - Würth CAR-Haus';
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
        {text: 'Car Lovers'},
        {text: "Looking to Rejuvenate their Car's Interior"},
        {text: 'Who Values a Luxury Driving Experience'},
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
      tital: "Transform your car's interior", 
    },
    { 
      image: UnmatchedClarity,
      tital: 'Unsurpassed comfort', 
    },
    { 
      image: BuilttoLast,
      tital: 'Redefine aesthetics', 
      
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
                    <h1 className='sizeH1 tu white'>Micro Classy</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Interior</Link>
            <Link className='active'>Micro Classy</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Micro Classy</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Precision car interior detailing that gives your car a touch of class!</b> </h4>
            </div>

            </div>
        </div>
      </section>


      
  






    <section className=' aboutDataList aboutDataListS3 lightgreyB'>
        <div className='container'>
        
        <div className='cAdvBox'>
        <h3 className='sizeH3 center' data-aos="fade-up">We transform your car's cabin into a haven of elegance:</h3>
        </div>

            <div className='customersReviewsAbout' data-aos="fade-up">
            
      <ul>
           {ChooseYourShieldCol.map((item, index) => (
          <li className='alignLeft' key={index}>
             <img src={item.image} alt={item.title} />
            <h3 className='sizeH5'>{item.tital}</h3>
            <p className='fontBold'>{item.description}</p>
          </li>
        ))}
      </ul>
            </div>

        </div>
      </section>

      <section data-aos="fade-up">      
<div className='container'>
<div className='cAdvBox'>
        <h3 className='sizeH3 center' data-aos="fade-up">Discover the Micro Classy Difference:</h3>
        </div>
<div className='chartSlide'>
<table>
    <tr class="bg_bl">
      <th>Services Included</th>
      <th>Micro β Clean Plus</th>
      <th>Micro β Clean</th>
      <th>Micro Classy</th>
    </tr>
    <tr>
      <td>Car Inspection</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Air Blowing</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Dry Vacuuming</td>
      <td>✓</td>
      <td>✓</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Roof Liner Cleaning</td>
      <td>✓</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Dashboard Cleaning</td>
      <td>✓</td>
      <td>✓</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Door Trim Cleaning</td>
      <td>✓</td>
      <td>%</td>
      <td>%</td>
    </tr>

    <tr>
      <td>Upholstery Cleaning </td>
      <td>✓</td>
      <td>%</td>
      <td>%</td>
    </tr>

    <tr>
      <td>Floor Carpet Cleaning</td>
      <td>✓</td>
      <td>✓</td>
      <td>%</td>
    </tr>

    <tr>
      <td>Mat Cleaning</td>
      <td>✓</td>
      <td>%</td>
      <td>✓</td>
    </tr>

    <tr>
      <td>Door Trim Dressing</td>
      <td>✓</td>
      <td>%</td>
      <td>%</td>
    </tr>

    <tr>
      <td>Door Cleaning</td>
      <td>✓</td>
      <td>✓</td>
      <td>%</td>
    </tr>

    <tr>
      <td>Final Inspection</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>

  </table>
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
  <h4 className='sizeH3'>Experience</h4>
  <p><b>01.</b> Micro β Clean Plus!</p>
  <p><b>02.</b> Micro β Clean! </p>
  <p><b>03.</b> Micro Classy today! </p>

</div>

</div></section>


<section className='svList lightgreyB'> <div className='container'>

<h3 className='sizeH3' data-aos="fade-up">Ideal for:</h3>

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

export default MicroClassy
