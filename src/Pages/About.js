import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';


// Images
import about from '../Assets/Images/topBanners/about.jpg'
import aboutWurth from '../Assets/Images/about-wurth.jpg'
import { FaArrowRight } from 'react-icons/fa';
// Images End

const About = () => {
    
  // SEO Tags
  useEffect(() => {
    document.title = 'About Us - Würth CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
  // SEO Tags End



  
  // About Count List 
  const listItemsData = [
    { count: '27', text: 'Products' },
    { count: '25+', text: 'Years of Excellence' },
    { count: '1,000+', text: 'Employees in India' },
    { count: '27', text: 'Number of Services' },
  ];
  // About Count List End

  
  // About Count List Operates
  const listItemsDataOperates = [
    { count: '80+', text: 'Countries' },
    { count: '400', text: 'Companies' },
    { count: '2,500+', text: 'Branches Worldwide' },
    { count: '87,000+', text: 'Employees' },
    { count: '4,000,000+', text: 'Customers' },
  ];
  // About Count List Operates End
  

  return (
    <>
    <Header/>

    <section className='topBanner'>
        <div className='topBannerImg'>
            <img src={about} />
        </div>
        <div className='topBannerText'>
            <div className='container'>
                <h1 className='sizeH1 tu'>About Us</h1>
            </div>
        </div>
    </section>

    <div className='breadcrumbNav'>
        <div className='container'>
          <div className='breadcrumbNavList'>
            <Link to='/'>Home</Link>
            <Link className='active'>About Us</Link>
          </div>
        </div>
    </div>


    <section className='aboutData'>
      <div className='container'>
          <div className='aboutDataRow'>
          <div className='aboutDataCol textRight'>
            <h3 className='sizeH2'><span className="red tu">Würth CAR<span className="fontBook">-Haus</span></span></h3>
            <h2 className='sizeH1 tu'>About Us</h2>
          </div>
          <div className='aboutDataCol'>

            <p><b>Carhaus is a premium brand that specializes in providing top-notch car care services,</b> catering to car enthusiasts and owners who value the appearance and maintenance of their vehicles. With a passion for automotive excellence, Carhaus offers a comprehensive range of services that includes car detailing, car wash, paint protection film (PPF), ceramic coating, and more.</p>

            <p>As a brand under the renowned Wurth umbrella, Carhaus adheres to the highest standards of quality and customer satisfaction, bringing the famed <b>German Precision for quality products and services to India.</b> With a commitment to excellence, Carhaus aims to become the go-to destination for car owners looking to maintain and enhance the beauty and value of their cherished automobiles.</p>
            <div className=" btnSpace"><Link className="btnS1 sizeH4 black" to="/services"><FaArrowRight/> Check out our Services</Link></div>
          </div>

          </div>
      </div>
    </section>


    <section className='aboutDataList'>
      <div className='container'>
      <ul>
        {listItemsData.map((item, index) => (
          <li key={index}>
            <h3 className='sizeH1 red'>{item.count}</h3>
            <p className='fontBold'>{item.text}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>

    <section className='aboutMV'>
      <div className='container'>
            <div className='aboutMVCall'>
              <h3 className='sizeH3 red'>Mission</h3>
              <p>At <span className="red tu bold">Würth CAR<span className="fontBook">-Haus</span></span>, our mission is to redefine car care through premium services that exceed expectations, utilizing cutting-edge technology, and fostering a passion for automotive excellence. </p>
            </div>
            <div className='aboutMVCall white'>
            <h3 className='sizeH3 white'>Vision</h3>
            <p>Our vision is to set new standards in car care, combining innovation and precision to create perfectly maintained and protected vehicles that reflect individual style.</p>
            </div>
              
      </div>
    </section>


    <section className='aboutDataS2'>
      <div className='container'>
          <div className='aboutDataS2Col'>
            <h3 className='sizeH3'><span className="red">Social & Environmental</span><br/>Responsibility</h3>
          </div>
          <div className='aboutDataS2Col'>
          <h3 className='sizeH4'>Sustainability Holds our World Together</h3>
            <p>We are striving for climate neutrality by using renewable energy sources, establishing closed life cycles for commodities and materials along complex supply chains, and endorsing fair cooperation within our global supply chain.</p>
          </div>
          </div>
    </section>



    <section className='center'>
      <div className='container'>
        <Link className="btnS1 sizeH4 black" to="/"><FaArrowRight/> Read The Würth Group’s Sustainability Report</Link>
      </div>
    </section>

    <section className='aboutBgWurth'>
      <img src={aboutWurth} />
    </section>



    <section className='aboutData'>
      <div className='container'>
          <div className='aboutDataRow'>
          <div className='aboutDataCol'>
            <h3 className='sizeH2'><span className="red tu">Würth<span className="fontBook black"> Group</span></span></h3>
          </div>
          <div className='aboutDataCol'>

            <p>Every big story has its beginning. That of the Würth Group began in 1945 in Künzelsau, a small German town in the region of Hohenlohe. Over many decades, the screw wholesaler has developed into the world’s largest company for assembly and fastening technology and into a patron of art and culture.</p>

            <p>Würth is now a globally recognized brand known for its expertise in providing high-quality products, solutions, and services in various industries, with a strong focus on automotive, construction, and maintenance sectors. Founded in 1945 in Germany, Würth has grown to become a leading international supplier of assembly and fastening materials.</p>

            <p>The Würth Group operates in over 80 countries, serving a diverse customer base with an extensive range of products. Würth has built a reputation for reliability, innovation, and customer-centricity, making them a trusted partner for professionals and businesses across different industries..</p>


          </div>
      </div></div>
    </section>

    <section className='aboutDataList'>
      <div className='container'>
      <ul>
        {listItemsDataOperates .map((item, index) => (
          <li key={index}>
            <h3 className='sizeH1 red'>{item.count}</h3>
            <p className='fontBold'>{item.text}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>


    <section className='center pT'>
      <div className='container'>
        <Link className="btnS1 sizeH4 black" to="/"><FaArrowRight/> Know more about <b className='tu'>Würth</b></Link>
      </div>
    </section>



    <Footer/>
    </>
  )
}

export default About
