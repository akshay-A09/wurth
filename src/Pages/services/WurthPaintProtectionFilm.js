import React, {useEffect} from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
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
import PPF from '../../Assets/Images/topBanners/ppf.jpg'
import BuilttoLast from '../../Assets/Images/services/BuilttoLast.png'
import SelfHealingFilm from '../../Assets/Images/services/SelfHealingFilm.png'
import TotalProtection from '../../Assets/Images/services/TotalProtection.png'
import UnmatchedClarity from '../../Assets/Images/services/UnmatchedClarity.png'
// Images End


const WurthPaintProtectionFilm = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'Wurth Paint Protection Film | Services - Würth CAR-Haus';
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
      tital: 'Self-Healing Film', 
      description: 'Acts as an invisible barrier' 
    },
    { 
      image: UnmatchedClarity,
      tital: 'Unmatched Clarity', 
      description: "Preserves the car's original color, gloss & clarity" 
    },
    { 
      image: BuilttoLast,
      tital: 'Built to Last', 
      description: 'Thrives in harsh weather conditions' 
    },
    { 
      image: TotalProtection,
      tital: 'Total Protection', 
      description: 'Withstands the impact of rock chips, stains, debris & more' 
    }

  ];
  // About Count List End

    // About Count List 
    const svListData = [
      {text: 'Full Bonnet'},
      {text: 'Leading Bonnet Edge'},
      {text: 'Bumpers'},
      {text: 'Painted Side Mirrors'},
      {text: 'Fender Panels'},
      {text: 'Rocker Panels'},
      {text: 'Door Handle Cavity'},
      {text: 'Door Edges'},
      {text: 'Trunk Ledges'},
    ];
    // About Count List End
  

  // Customers Reviews Slider
  const customersAdvantagesSlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};
  // Customers Reviews Slider end

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
  


  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={PPF} />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Würth Paint<br />
Protection Film</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link className='active'>Wurth Paint Protection Film</Link>
            </div>
            </div>
        </div>





        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">Würth Paint</span><br/> Protection Film</h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>Automotive perfection meets unrivaled protection</b> </p>
            </div>

            </div>
        </div>
      </section>


      
    <section className='aboutDataList aboutDataListS2' data-aos="fade-up">
      <div className='container'>
      <ul>
      
           {ppfItemsData.map((item, index) => (
          <li key={index}>
             <img src={item.image} alt={item.title} />
            <h3 className='sizeH5'>{item.tital}</h3>
            <p className='fontBold'>{item.description}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>


    <section className='clickBox2'> <div className='container'>

        <div className='clickBoxCol white'>
          <h4 className='sizeH3'>The Process that Protects</h4>
          <p><b>01.</b> Meticulous Preparation</p>
          <p><b>02.</b> Precision Installation</p>
          <p><b>03.</b> Invisible Protection </p>
          <p><b>04.</b> Self-Healing Properties</p>

        </div>

    </div></section>



    <section className='svList'> <div className='container'>

            <h3 className='sizeH3' data-aos="fade-up">Shielding Vulnerable Areas from Damage</h3>

            <ul className='svListCol' data-aos="fade-up">
            {svListData.map((item, index) => (
              <li>{item.text}</li>
            ))}
            </ul>


    </div></section>




    <section className='aboutData lightgreyB'>
        <div className='container'>
        
        <div className='cAdvBox'>
        <h3 className='sizeH3 center' data-aos="fade-up">Advantages of choosing Würth PPF</h3>
        </div>


            <div className='customersReviewsAbout' data-aos="fade-up">
            <Slider {...customersAdvantagesSlider} className="customersReviewsAbout-slick slick-slider">

            {customersAdvantagesData.map((item, index) => (
            <div className='item' key={index}>
              <div className='customersReviewsDataCall'><div>
                <h3>{item.text}</h3>
                </div>
              </div>
            </div>
            ))}

            </Slider>
            </div>

        </div>
      </section>


      <section className='ChooseYourShield pB'>
        <div className='container'>
        
        <div className='cAdvBox'>
        <h3 className='sizeH3' data-aos="fade-up">Choose Your Shield</h3>
        </div>


        <div className='ChooseYourShieldRow' >
        {ChooseYourShieldData.map((item, index) => (
          <div className='ChooseYourShieldCol' key={index} data-aos="fade-up">
          <Link to={item.link}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>  
          </div>
        ))} 
  
          
        </div>  



        </div>
      </section>


<section className='checkoutSvr center' data-aos="fade-up">
  <div className='container'>
    <Link to='/services' className='btnS1 sizeH4 black'><FaArrowRight/> Check out our Services</Link>
  </div>
</section>



        <Footer/>
    </div>
  )
}

export default WurthPaintProtectionFilm
