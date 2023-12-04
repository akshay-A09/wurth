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
import topBanner from '../../../Assets/Images/services/new/CeraMaxx.jpg'
import Value from '../../../Assets/Images/services/Value.png'
import Redefine from '../../../Assets/Images/services/Redefine.png'
import Mind from '../../../Assets/Images/services/Mind.png'
// Images End


  // About Count List 
  const ppfItemsData = [
    { 
      image: Redefine,
      tital: "Prevent Damage", 
      description: "Say goodbye to chewed wires, upholstery, and interior damage." 
    },
    { 
      image: Value,
      tital: 'Cost Savings', 
      description: "Preventing rodent damage can save you money on repairs. Rodent-related damage can be expensive." 
    },
    { 
      image: Mind,
      tital: 'Peace of Mind', 
      description: "Enjoy peace of mind knowing your car's interior is protected." 
    }

  ];
  // About Count List End

const RodentRepellent = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Rodent Repellent | Services - Würth CAR-Haus';
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
                <img src={topBanner} alt='Rodent Repellent'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Rodent Repellent</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link>Other Services</Link>
            <Link className='active'>Rodent Repellent</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Rodent Repellent</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Protect your vehicle from unwanted pests and their destructive habits with Rodent Repellent.</b> </p>
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

export default RodentRepellent