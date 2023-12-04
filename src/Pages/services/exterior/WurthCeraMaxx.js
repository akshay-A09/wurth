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
import topBanner from '../../../Assets/Images/services/new/CeraMaxx.jpg'
import car from'../../../Assets/Images/services/car.jpg'
import ceramaxx from'../../../Assets/Images/topBanners/ceramaxx.jpg'
import Aesthetic from'../../../Assets/Images/services/Aesthetic.png'
import Value from'../../../Assets/Images/services/Value.png'
import Maintenance from'../../../Assets/Images/services/Maintenance.png'
import TotalProtection2 from'../../../Assets/Images/services/TotalProtection2.png'
// Images End

const WurthCeraMaxx = () => {

  // SEO Tags
  useEffect(() => {
    document.title = 'WÜRTH Paint Protection Film | Services - Würth CAR-Haus';
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
      image: TotalProtection2,
      tital: 'Total Protection', 
      description: 'Give your car an all-round protection from UV rays, acids, tree sap, etc.' 
    },
    { 
      image: Maintenance,
      tital: 'Optimize Maintenance Costs', 
      description: "Save your money on repairs and repainting issues." 
    },
    { 
      image: Value,
      tital: 'Better Resale Value', 
      description: 'A well-maintained car with a high resale value.' 
    },
    { 
      image: Aesthetic,
      tital: 'Enhanced Aesthetic Appeal', 
      description: "A deep, glossy finish that enhances your car's appearance."
       
    }
  ];
  // About Count List End

  
    // About Count List 
    const svListData = [
        {text: 'Dusty Roads'},
        {text: 'Harsh Climatic Conditions'},
        {text: 'Dirt and Other Contaminants'},
      
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
    // {text: 'Unrivalled Protection',},
    {text: 'Flawless Appearance',},
    {text: 'Scratch Resistance',},
    {text: 'Easy Maintenance',},
    {text: 'Longevity',},
  ];
  // Customers Reviews End

  

  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={ceramaxx} alt='WÜRTH Cera Maxx'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>WÜRTH <br/>Cera Maxx</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link className='active'>WÜRTH Cera Maxx</Link>
            </div>
            </div>
        </div>


        <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2 red '><span className="tu">WÜRTH <br/>Cera Maxx</span></h3>
            </div>
            <div className='aboutDataCol'>
              <p><b>A coating that adds an extra layer of protection to your car.</b> </p>
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

    <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow' data-aos="fade-up">
            <div className='aboutDataCol' data-aos="fade-up">
            <h3 className='sizeH3 red' >Shielding Perfection with Nanotechnology</h3>
            </div>
            <div className='aboutDataCol'>
               
            <p><b>Würth nano paint protection system gives your car the ultimate paint gloss and a distinguished look. Get an almost impenetrable barrier over your car's paint. </b></p>
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
  <h4 className='sizeH3'>Multi-Step Process for High Impact Results</h4>
  <p><b>01.</b> Clay </p>
  <p><b>02.</b> Compound - P10 </p>
  <p><b>03.</b> Compound - P20 </p>
  <p><b>04.</b> Glaze Polish - P30 </p>
  <p><b>05.</b> Ceramic Coating Application </p>

</div>

</div></section>

<section className='svList lightgreyB'> <div className='container'>

<h3 className='sizeH3' data-aos="fade-up">Luxury Care Tailored to You</h3>
<p>Ceramic Coating protects Your Car from:</p>
<ul className='svListCol' data-aos="fade-up">
{svListData.map((item, index) => (
  <li>{item.text}</li>
))}
</ul>


</div></section>



<section className='resultsCar'>
<div className='container center'>

<h3 className='sizeH4'>Results of Würth Cera Maxx</h3>
<p>The transformation that will elevate your car to a whole new level of luxury!</p>
<img src={car} />

</div>
</section>



<section className='aboutData lightgreyB'>
  <div className='container'>
  
  <div className='cAdvBox'>
  <h3 className='sizeH3 center' data-aos="fade-up">Advantages of choosing Würth Cera Maxx</h3>
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


<section data-aos="fade-up">      
<div className='container'>
<div className='cAdvBox'>
        <h3 className='sizeH3 center' data-aos="fade-up">Choose Your Treatment</h3>
        </div>
<div className='chartSlide'>
<div className="box-area">
<div className="cera-box">
<p><b>01.</b><h4>Cera Maxx</h4></p><span>3-Years</span>
</div>
<div className="cera-box">
<p><b>01.</b><h4>Cera Gloss</h4></p><span>2-Years</span>
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

export default WurthCeraMaxx
