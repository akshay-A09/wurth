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
import topBanner from '../../../Assets/Images/services/images/CavityWaxProtection.jpg'
import Maintenance from '../../../Assets/Images/services/Maintenance.png'
import Redefine from '../../../Assets/Images/services/Redefine.png'
import Value from '../../../Assets/Images/services/Value.png'
// Images End


const CavityWaxProtection = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Cavity Wax Protection | Services - Würth CAR-Haus';
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
      tital: "Rust Prevention", 
      description: "Ward off rust and corrosion, ensuring your car's structural integrity remains intact." 
    },
    { 
      image: Redefine,
      tital: 'Extended Longevity', 
      description: "Enhance your car's lifespan by safeguarding vital internal components." 
    },
    { 
      image: Value,
      tital: 'Savings on Repairs', 
      description: 'Avoid costly repairs down the road by proactively protecting hidden cavities.' 
    }

  ];
  // About Count List End

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Cavity Wax Protection'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Cavity Wax <br/> Protection</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Anti Rust</Link>
            <Link className='active'>Cavity Wax Protection</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Cavity Wax Protection</span></h3>
            </div>
            <div className='aboutDataCol'>
              <h4><b>Safeguard your car's hidden nooks and crannies.</b> </h4>
              <p><b>Shield your vehicle's unseen spaces from corrosion and rust with Cavity Wax Protection.</b> </p>
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

export default CavityWaxProtection