import React, { useRef, useEffect } from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import Fancybox from "../Components/Fancybox";

// Icons
import { FaArrowRight } from 'react-icons/fa';
// Icons End

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End

// Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
// Slick

// Images
import gallery from '../Assets/Images/topBanners/gallery.jpg'
import gallery1 from '../Assets/Images/gallery/gallery1.jpg'
import demo from '../Assets/Images/demo.jpg'
import CarDetailing from '../Assets/Images/services/images/CarDetailing.jpg';
import CarWash from '../Assets/Images/services/images/CarWash.jpg';
import CeramicCoating from '../Assets/Images/services/images/CeramicCoating.jpg';
import ExteriorProtection from '../Assets/Images/services/images/ExteriorProtection.jpg';
import InteriorCare from '../Assets/Images/services/images/InteriorCare.jpg';
import ppf from '../Assets/Images/services/images/ppf.jpg';
// Images End
const Gallery = () => {
    

// SEO Tags
  useEffect(() => {
    document.title = 'Gallery - WÜRTH CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
// SEO Tags End

  
  // GSPA
  useEffect(() => {
    Aos.init({duration: 400});
  }, []);
  // GSPA End


  // Transformation Pictures Slider
  const TransformationPicturesSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};
  // Transformation Pictures Slider end

  // Transformation Pictures Data
  const TransformationPicturesData = [
    {image: gallery1,},
    {image: gallery1,},
    {image: gallery1,},
  ];
  // Transformation Pictures Data End

  
  // Services Slider
  const servicesSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  // Services Slider end


  // Data for the services slider
  const servicesData = [
    {
      title: 'Paint Protection Film (PPF)',
      image: ppf,
      description: "Shield your car's paint from road debris and scratches with our premium PPF solutions. Our high-quality films offer unparalleled protection while preserving your vehicle's appearance.",
      link: '/',
    },
    {
      title: 'Ceramic Coating',
      image: CeramicCoating,
      description: "Experience unparalleled attention to detail with our comprehensive car detailing packages. Whether it's restoring your vehicle's shine or rejuvenating the interior, our experts will leave your car looking flawless.",
      link: '/',
    },  
     {
      title: 'Car Detailing',
      image: CarDetailing,
      description: "Shield your car's paint from road debris and scratches with our premium PPF solutions. Our high-quality films offer unparalleled protection while preserving your vehicle's appearance.",
      link: '/',
    },
    {
      title: 'Exterior Protection',
      image: ExteriorProtection,
      description: "Experience unparalleled attention to detail with our comprehensive car detailing packages. Whether it's restoring your vehicle's shine or rejuvenating the interior, our experts will leave your car looking flawless.",
      link: '/',
    },
    {
      title: 'Interior Care',
      image: InteriorCare,
      description: "Shield your car's paint from road debris and scratches with our premium PPF solutions. Our high-quality films offer unparalleled protection while preserving your vehicle's appearance.",
      link: '/',
    },
    {
      title: 'Car Wash',
      image: CarWash,
      description: "Experience unparalleled attention to detail with our comprehensive car detailing packages. Whether it's restoring your vehicle's shine or rejuvenating the interior, our experts will leave your car looking flawless.",
      link: '/',
    },  
 

  ];
  // Data for the services slider End

  // Customer Journey Slider
  const customerJourneySlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  // Customer Journey Slider end

// Customer Journey Data
const customerJourneyData = [
    {
    linkYT: 'https://www.youtube.com/watch?v=hmjnh8TONWI',
    image: demo,
    name: 'demo1',
    },
    {
    linkYT: 'https://www.youtube.com/watch?v=hmjnh8TONWI',
    image: demo,
    name: 'demo2',
    },
    {
    linkYT: 'https://www.youtube.com/watch?v=hmjnh8TONWI',
    image: demo,
    name: 'demo3',
    },
    {
    linkYT: 'https://www.youtube.com/watch?v=hmjnh8TONWI',
    image: demo,
    name: 'demo4',
    },
    {
    linkYT: 'https://www.youtube.com/watch?v=hmjnh8TONWI',
    image: demo,
    name: 'demo5',
    },
      

];

// Customer Journey Data End

  return (
    <>
    <Header/>

    <section className='topBanner'>
        <div className='topBannerImg'>
            <img src={gallery} alt='Gallery' />
        </div>
        <div className='topBannerText'>
            <div className='container'>
                <h1 className='sizeH1 tu white'>Gallery</h1>
            </div>
        </div>
    </section>

    <div className='breadcrumbNav'>
        <div className='container'>
          <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link className='active'>Gallery</Link>
          </div>
        </div>
    </div>
      

    <section className='TransformationPicture'>
        <div className='container'>
        <h3 className='sizeH2' data-aos="fade-up"><span className='red'>Transformation</span>  in Pictures </h3>

      <div data-aos="fade-up">
        <Slider {...TransformationPicturesSlider} className="TransformationPicturesSlider-slick slick-slider">

        {TransformationPicturesData.map((item, index) => (
            <div className='item' key={index}>
                <img src={item.image} alt={item.title} />
            </div>
        ))}

        </Slider>
        </div>
        </div>
      </section>

      <section className='hmServices hmServicesS2 white'>
        <div className='container'>

          <div className='TsectHd'>

            <div className='TsectHdL' data-aos="fade-up">
              <h4 className='smHeading tu red afLine afLineCW sizeH6'>Services</h4>
            </div>

            <div className='TsectHdR' data-aos="fade-up">
              <h3 className='sizeH3'> <span className='red'>Discover Our Expertise: </span> <br/>Services in Action</h3>
            </div>

          </div>

          <div className='servicesSlider servicesSliderS2' data-aos="fade-up">
            <Slider {...servicesSlider} className="servicesSlider-slick slick-slider">

              {servicesData.map((service, index) => (
                <div className='item' key={index}>
                  <Link to={service.link} className='white'>
                    <div className='servicesSliderImg'>
                      <img src={service.image} alt={service.title} />
                      <div className='servicesSliderHd'>
                        <h3 className='sizeH5'>{service.title}</h3>
                      </div>
                    </div>

                    <div className='servicesSliderP'>
                      <p>{service.description}</p>
                      <FaArrowRight/>
                    </div>
                  </Link>
                </div>
              ))}


            </Slider>

            <div className='btnLeft btnSpaceEx' data-aos="fade-up">
              <Link to='/services' className='btnS1 sizeH5 red fontBold'><FaArrowRight/> View All Services</Link>
            </div>

          </div>

        </div>
      </section>


    <section className='customerJourney'>
        <div className='container'>

    <h3 className='sizeH3' data-aos="fade-up"> <span className='red'>Customer Journey:  </span> <br/>Watch and Experience</h3>
       <div data-aos="fade-up">         
    <Fancybox options={{Carousel: {infinite: false,},}}>    
    <Slider {...customerJourneySlider} className="slick-slider customerJourneySlider">
    {customerJourneyData.map((item, index) => (
            <div className='item' key={index}>
                <Link data-fancybox={item.name} to={item.linkYT}><img src={item.image} alt="item.image"/></Link>
            </div>
        ))}
    </Slider>
    </Fancybox>
    </div>

    </div>
    </section>

  
    <Footer/>
    </>
  )
}

export default Gallery
