import React, {useEffect} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

// Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
// Slick

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs

// Icons
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
// Icons End


// site images
import banner1 from '../Assets/Images/slider/banner1.png'
import banner2 from '../Assets/Images/slider/banner2.png'
import carhaus from '../Assets/Images/carhaus.png';
import CarDetailing from '../Assets/Images/services/car-detailing.jpg';
import PaintProtectionFilm from '../Assets/Images/services/paint-protection-film.jpg';
import demo1 from '../Assets/Images/news/demo1.jpg';
import demo2 from '../Assets/Images/news/demo2.jpg';
import demo3 from '../Assets/Images/news/demo3.jpg';
// site images end

const Home = () => {


// SEO Tag
  useEffect(() => {
    document.title = 'Home - Würth CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
// SEO Tag End

  // Home Slider
  const homescreenSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
  };
  // Home Slider end

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


  // About Count List 
  const listItemsData = [
    { count: '80+', text: 'Countries' },
    { count: '150+', text: 'Services' },
    { count: '5000+', text: 'Satisfied Clients' },
    { count: '20+', text: 'Years of Excellence' },
  ];
  // About Count List End

  // Data for the services slider
  const servicesData = [
    {
      title: 'Paint Protection Film (PPF)',
      image: PaintProtectionFilm,
      description: "Shield your car's paint from road debris and scratches with our premium PPF solutions. Our high-quality films offer unparalleled protection while preserving your vehicle's appearance.",
      link: '/',
    },
    {
      title: 'Ceramic Coating',
      image: PaintProtectionFilm,
      description: "Experience unparalleled attention to detail with our comprehensive car detailing packages. Whether it's restoring your vehicle's shine or rejuvenating the interior, our experts will leave your car looking flawless.",
      link: '/',
    },
    {
      title: 'Paint Protection Film (PPF)',
      image: PaintProtectionFilm,
      description: "Shield your car's paint from road debris and scratches with our premium PPF solutions. Our high-quality films offer unparalleled protection while preserving your vehicle's appearance.",
      link: '/',
    },
    {
      title: 'Ceramic Coating',
      image: PaintProtectionFilm,
      description: "Experience unparalleled attention to detail with our comprehensive car detailing packages. Whether it's restoring your vehicle's shine or rejuvenating the interior, our experts will leave your car looking flawless.",
      link: '/',
    },

  ];
  // Data for the services slider End


  // Data for the Latest  Updates Tabs

    // News
    const latestUpdatesNews = [
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo1,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo2,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo3,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
    ];
    // News End

    
    // Events
    const latestUpdatesEvents = [
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo3,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo1,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo2,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
    ];
    // Events End

    
    // Blogs
    const latestUpdatesBlogs = [
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo2,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo3,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
      {
        link: '/',
        date: '9 Sept 2023',
        image: demo1,
        title: 'Lorem Ipsum is simply dummy',
        description: "At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. ",
      },
    ];
    // Blogs End


  // Data for the Latest  Updates Tabs End

  return (
    <>
      <Header />
      <section className='homeBanner'>
        <Slider {...homescreenSlider} className="homescreen-slick slick-slider">
     
     
     {/* SLider 1 */}
     <div className='item itemA'>
            <div className='itemCover'>
              <div className='container'>
                <div className='itemCover_hd'>
                  <h2 className='itemCover_hd_call'>
                  Elevate<br /> Your  Ride <br /> with <span className="red tu">Würth<br/> CAR<span className="fontBook">-Haus</span></span>
                  </h2>
                </div>

                <div className='itemCover_img'>
                  <img src={banner1} />
                </div>

                <div className='itemCover_points'>
                  <ul>
                    <li>Car<br /> Detailing</li>
                    <li>Car<br /> Wash</li>
                    <li>Paint Protection<br /> Film (PPF)</li>
                    <li>Ceramic<br /> Coating</li>
                    <li>Interior <br />Protection</li>
                    <li><Link to='/'><FaArrowRight/> View All</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
     {/* SLider 1 End*/}
 
     {/* SLider 2 */}
     <div className='item itemB'>
            <div className='itemCover'>
              <div className='container'>
                <div className='itemCover_hd'>
                  <h2 className='itemCover_hd_call'>
                    Technology<br />
                    from Germany,<br />
                    for <span>Cars in India</span>
                  </h2>
                </div>

                <div className='itemCover_img'>
                  <img src={banner2} />
                </div>

                <div className='itemCover_points'>
                  <ul>
                    <li>Car<br /> Detailing</li>
                    <li>Car<br /> Wash</li>
                    <li>Paint Protection<br /> Film (PPF)</li>
                    <li>Ceramic<br /> Coating</li>
                    <li>Interior <br />Protection</li>
                    <li><Link to='/'><FaArrowRight/> View All</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
     {/* SLider 2 End*/}
 
 

        </Slider>
      </section>


      <div className='offBook'><Link to='/'>10% off<br />first booking </Link></div>


      <div className='callus_home'>
        <Link to=''>
          <h4>Call Us  +91 7977784317 </h4>
          <p><FaMapMarkerAlt/> Salem, Tamil Nadu India</p>
          <FaArrowRight className='callus_home_a'/>
        </Link> 
      </div>
      <div className='clearfix'></div>



      <section className='hmAbout'>
        <div className='container'>
          <h4 className='smHeading tu red afLine sizeH6'>About</h4>


          <div className='hmAboutMin'>
            <h3 className='sizeH2'>Welcome to <span className='red tu'>Würth CAR<span className='fontBook'>-Haus</span></span> </h3>
            <p>At <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>, we are dedicated to elevating your car care experience. With a passion for perfection and a commitment to excellence, we offer a comprehensive range of premium services designed to bring out the best in your vehicle. Welcome to a world where automotive luxury meets unrivaled expertise.</p>

            <div className='hmAboutMinList'>
              {/* About Count List  */}
              <ul>
                {listItemsData.map((item, index) => (
                  <li key={index}>
                    <h3 className='sizeH3 red'>{item.count}</h3>
                    <p className='fontBold'>{item.text}</p>
                  </li>
                ))}
              </ul>
              {/* About Count List End */}
              <div className='hmAboutMinList_btn'>
                <Link to='/about' className='btnS1 red fontBold'><FaArrowRight/> Know More </Link>
              </div>

            </div>



          </div>


        </div>
      </section>

      <section className='carHaus'>
        <img src={carhaus} />
      </section>

      <section className='hmServices white'>
        <div className='container'>

          <div className='TsectHd'>

            <div className='TsectHdL'>
              <h4 className='smHeading tu red afLine afLineCW sizeH6'>Services</h4>
            </div>

            <div className='TsectHdR'>
              <h3 className='sizeH3'>Experience Premium Care with  <span className='red'>Our Services</span></h3>
              <p>From meticulous detailing to advanced paint protection solutions, we have tailored our services to meet your car's unique needs</p>
            </div>

          </div>

          <div className='servicesSlider'>
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

            <div className='center btnSpace'>
              <Link to='/services' className='btnS1 sizeH5 white fontBold'><FaArrowRight/> View All Services</Link>
            </div>

          </div>

        </div>
      </section>

      <section className='clickBox'> <div className='container'>

        <div className='clickBoxCol white'>
          <h4 className='sizeH3'>Elevate Your Car Care Experience Today!</h4>
          <p>Ready to experience the difference with<br />
            <span className='tu fontBold'>Würth CAR<span className='fontBook'>-Haus</span></span>? Book an appointment or contact our nearest location to get started.</p>
          <div className='btnSpace'>
            <Link to='/' className='btnS2 white fontBold blackB'>Book an Appointment</Link>
          </div>
        </div>

   

      </div></section>




      <section className='latestUpdatesHm'><div className='container'>
        <h4 className='smHeading tu red afLine sizeH6'>Latest  Updates </h4>


        <div className='latestUpdatesHmTab'>
          <Tabs>
            <TabList>
              <Tab><FaArrowRight /> News</Tab>
              <Tab><FaArrowRight /> Events</Tab>
              <Tab><FaArrowRight /> Blogs</Tab>
            </TabList>

            <TabPanel>
              <div className='blogDataHmMin'>
                {latestUpdatesNews.map((tabnews, index) => (
                  <div className='blogDataHm' key={index}>
                    <Link to={tabnews.link}>
                      <div className='blogDataHmBg'>
                        <div className='blogDataHmBgDate tu'>{tabnews.date}</div>
                        <img src={tabnews.image} alt={tabnews.title} />
                      </div>
                      <div className='blogDataHmCont'>
                        <h4>{tabnews.title}</h4>
                        <p dangerouslySetInnerHTML={{ __html: tabnews.description }} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
            <div className='blogDataHmMin'>
                {latestUpdatesEvents.map((tabevents, index) => (
                  <div className='blogDataHm' key={index}>
                    <Link to={tabevents.link}>
                      <div className='blogDataHmBg'>
                        <div className='blogDataHmBgDate tu'>{tabevents.date}</div>
                        <img src={tabevents.image} alt={tabevents.title} />
                      </div>
                      <div className='blogDataHmCont'>
                        <h4>{tabevents.title}</h4>
                        <p dangerouslySetInnerHTML={{ __html: tabevents.description }} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
            <div className='blogDataHmMin'>
                {latestUpdatesBlogs.map((tabblogs, index) => (
                  <div className='blogDataHm' key={index}>
                    <Link to={tabblogs.link}>
                      <div className='blogDataHmBg'>
                        <div className='blogDataHmBgDate tu'>{tabblogs.date}</div>
                        <img src={tabblogs.image} alt={tabblogs.title} />
                      </div>
                      <div className='blogDataHmCont'>
                        <h4>{tabblogs.title}</h4>
                        <p dangerouslySetInnerHTML={{ __html: tabblogs.description }} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </TabPanel>

          </Tabs>
        </div>
      </div>
      </section>



      <Footer />
    </>
  )
}

export default Home
