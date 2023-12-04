import React, {useEffect} from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import { Link } from 'react-router-dom';
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
import topBanner from '../../../Assets/Images/services/new/GlossSeal.jpg'
import glossSeal from '../../../Assets/Images/glossSeal.jpg'
import CarRevives from '../../../Assets/Images/services/CarRevives.png'
import Gloss from '../../../Assets/Images/services/Gloss.png'
import Defends from '../../../Assets/Images/services/Defends.png'
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
      image: CarRevives,
      tital: "REVIVES YOUR CAR'S EXTERIOR", 
      description: "Experience a stunning transformation as we remove swirl marks, minor scratches, and dullness, restoring your car's youthful allure." 
    },
    { 
      image: Defends,
      tital: 'DEFENDS AGAINST THE ELEMENTS', 
      description: "Our multi-step process forms a durable shield, protecting your car from environmental pollutants, UV rays, and more." 
    },
    { 
      image: Gloss,
      tital: 'LONG-LASTING GLOSS', 
      description: 'Our advanced polymer coating bonds seamlessly, ensuring a lasting, elegant shine that endures the test of time.' 
    }

  ];
  // About Count List End

  
    // About Count List 
    const svListData = [
        {text: 'Car Lovers'},
        {text: 'Daily Drivers'},
      ];
      // About Count List End
    

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='WÜRTH Gloss Seal'/>
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
              <h3 className='sizeH2 red '><span className="tu">WÜRTH  Gloss Seal</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Würth Gloss Seal brings back that fresh, new-car shine. It's the ultimate revival for your vehicle's exterior, ensuring it stands up to the elements while maintaining its long-lasting, radiant gloss.</b></p>
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

<h3 className='sizeH4'>Würth Gloss Seal is ideal for:</h3>

<ul className='svListCol' data-aos="fade-up">
{svListData.map((item) => (
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
