import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import EnquireNow from '../Components/Forms/EnquireNow'

import { Link } from 'react-router-dom';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// Images
import contactUs from '../Assets/Images/topBanners/contactUs.jpg'
// Images

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End

// Gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Gspa End

const ContactUs = () => {
    
  
  // SEO Tags
  useEffect(() => {
    document.title = 'Contact Us - WÜRTH CAR-Haus';
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

  const clickBoxContactG = gsap.timeline({
    duration: 3,
    scrollTrigger: {
      trigger: ".clickBoxContact",
      toggleActions: "play none none none",
      start: "top 130%",
      end: "+=50%",
      scrub: true,
    },
  });
  clickBoxContactG.to(".clickBoxContact .container ", { clipPath: "inset(0 0 0% 0)" });


}, []);
// GSPA End

  // Form PopUp
  const [openModalEnquireNow, setOpenModalEnquireNow] = React.useState(false);

  return (
    <>
      <Header/>

      <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={contactUs} />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Contact Us</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
                <Link to='/'>Home</Link>
                <Link className='active'>Contact Us</Link>
            </div>
            </div>
        </div>



        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow'>
            <div className='aboutDataCol' data-aos="fade-up">
              <Link to='/locations' className='IconFaLink sizeH5 bold'><FaMapMarkerAlt/> <span>View Location</span></Link>
            </div>
            <div className='aboutDataCol locData' data-aos="fade-up">
            <h4>Business Hours: Mon - Fri 10.30 am - 7pm</h4>
            <p>Wuerth India Pvt. Ltd. 703/704, Sahar Windfall, Sahar Plaza Complex, Andheri – Kurla Road, J B Nagar, Andheri (East), Mumbai, Maharashtra – 400059</p>
            
            <h4><Link to="tellto:+912267377600" target='_blank' className='IconFaLink'><FaPhoneAlt/> +91 22 6737 7600</Link><span className='line'>|</span><Link to="mailto:info.wuerth@wuerth.in" target='_blank' className='IconFaLink'><FaEnvelope/> info.wuerth@wuerth.in</Link></h4>
            
            <h4><Link to="tellto:18001025061" target='_blank' className='IconFaLink'>Toll Free Number: 18001025061</Link></h4>

            </div>

            </div>
        </div>
      </section> 


      <section className='clickBoxContact'> <div className='container'>

        <div className='clickBoxCol clickBoxColBg'>
        
        </div>

        <div className='clickBoxCol white redB'>
          <h4 className='sizeH3'>Looking to be a Franchisee<br/>
of <span className='tu fontBold'>Würth Car<span className='fontBook'>-Haus?</span></span></h4>
          <p>Fill in the form below and we’ll be in touch with you.</p>
          <div className='btnSpaceEx'>
            <Link  className='btnS2 white fontBold blackB' onClick={() => { setOpenModalEnquireNow(true); }}>Enquire now</Link>

          

          </div>



        </div>
      </div></section>

    

      <section className='checkoutSvr center' data-aos="fade-up">
        <div className='container'>
            <Link to='/services' className='btnS1 sizeH4 black'><FaArrowRight/> Check out our Services</Link>
        </div>
    </section>
  
    {openModalEnquireNow && <EnquireNow closeModal={setOpenModalEnquireNow} />}


      <Footer/>
    </>
  )
}

export default ContactUs
