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
import topBanner from '../../../Assets/Images/services/new/PPF.jpg'
import Mind from '../../../Assets/Images/services/Mind.png'
import Esay from '../../../Assets/Images/services/Esay.png'
import Protection from '../../../Assets/Images/services/Protection.png'
import Value from '../../../Assets/Images/services/Value.png'
// Images End


const WurthPaintProtectionFilm = () => {

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
      image: Mind,
      tital: 'Peace Of Mind', 
      description: 'It survives in harsh weather conditions.' 
    },
    { 
      image: Value,
      tital: 'High Resale Value', 
      description: "It maintains the paint in excellent condition, hence better resale value." 
    },
    { 
      image: Esay,
      tital: 'Easy Maintenance', 
      description: "It's easier to clean and maintain your vehicle." 
    },
    { 
      image: Protection,
      tital: 'Better Protection', 
      description: "A deep, glossy finish that enhances your car's appearance." 
    }

  ];
  // About Count List End

    // About Count List 
    const svListData = [
      {text: 'Full Bonnet'},
      {text: 'Leading Bonnet Edge'},
      {text: 'Bumpers'},
      {text: 'Painted Side Mirrors'},
      {text: 'Fender'},
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
    {text: 'Perfect Guardian',},
    {text: 'Preserve Resale Value',},
    {text: 'Easy Maintenance',},
    {text: 'Lasting Investment',},
  ];
  // Customers Reviews End

  
  return (
    <div>
        <Header/>
        
        <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={topBanner} alt='Würth Paint Protection Film'/>
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Würth Paint <br/>Protection Film</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link className='active'>Würth Paint Protection Film</Link>
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
              <p><b>Würth PPF is engineered using advanced technology to create a transparent, self-healing shield that adheres seamlessly to your car's surface.</b> </p>
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
            {svListData.map((item) => (
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




      
<section>      
<div className='container'>
   
<div className='cAdvBox center'>
        <h3 className='sizeH3' data-aos="fade-up">Choose Your Shield</h3>
        </div>


<div className='chartSlide'>
<table>
    <tr class="bg_bl">
      <th>AREAS</th>
      <th>BASIC COVERAGE</th>
      <th>PREMIUM COVERAGE</th>
      <th>ULTIMATE COVERAGE</th>
    </tr>
    <tr>
      <td>Bumpers</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Painted Side Mirrors</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Door Edges</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Full Bonnet</td>
      <td>%</td>
      <td>x</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Leading Bonnet Edges</td>
      <td>%</td>
      <td>x</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Front Bumper</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>

    <tr>
      <td>Side Mirrors</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>

    <tr>
      <td>Partial hood</td>
      <td>x</td>
      <td>x</td>
      <td>%</td>
    </tr>

    <tr>
      <td>Rear Bumper</td>
      <td>%</td>
      <td>x</td>
      <td>x</td>
    </tr>

    <tr>
      <td>Fender</td>
      <td>%</td>
      <td>%</td>
      <td>x</td>
    </tr>

    <tr>
      <td>Rocker Panels</td>
      <td>%</td>
      <td>%</td>
      <td>x</td>
    </tr>

    <tr>
      <td>Door Handle Cavity</td>
      <td>%</td>
      <td>%</td>
      <td>x</td>
    </tr>

    <tr>
      <td>Trunk Ledges</td>
      <td>%</td>
      <td>%</td>
      <td>x</td>
    </tr>
  </table>
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

export default WurthPaintProtectionFilm
