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
import topBanner from '../../../Assets/Images/services/new/UnderbodyRustOff.jpg'
import Maintenance from '../../../Assets/Images/services/Maintenance.png'
import Esay from '../../../Assets/Images/services/Esay.png'
import Protection from '../../../Assets/Images/services/Protection.png'
import wurthcramaxx from '../../../Assets/Images/services/wurthcramaxx.jpg'
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
  const ppfItemsData = [
    { 
      image: Protection,
      tital: "Extreme Protection", 
      description: "Protection from rust and corrosion." 
    },
    { 
      image: Esay,
      tital: 'Enhanced Safety', 
      description: "Extreme protection for rust-prone areas." 
    },
    { 
      image: Maintenance,
      tital: 'Prolonged Lifespan', 
      description: "Ensuring car's structural integrity and longevity." 
    }
  ];
  // About Count List End

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Underbody Rust Off'/>
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
              <p><b>Fortify your car against corrosion. It's all about ensuring a robust, long-lasting foundation for your vehicle, offering unparalleled protection, enhanced safety, and an extended lifespan.</b> </p>
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

 

<section data-aos="fade-up">      
<div className='container'>
<img src={wurthcramaxx} alt={wurthcramaxx} className='w-100'/>

<div className='chartSlide'>
<div className="box-area">
<div className="cera-box">
<p><b>01.</b> <h3>UNDERBODY RUST OFF</h3></p><span>3-Years</span>
</div>
<div className="cera-box">
<p><b>02.</b> <h3>UNDERBODY RUST OFF X-TREME </h3></p><span>5-Years</span>
</div>
</div>
</div>
 
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

export default UnderbodyRustOff
