import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End



// Images
import products from '../Assets/Images/topBanners/products.jpg'

// Products
import new_paint_polish from '../Assets/Images/products/new_paint_polish.jpg';
import microfiberCloth from '../Assets/Images/products/microfiber_cloth.jpg';
import glassCleaner from '../Assets/Images/products/glass_cleaner.jpg';
import alloyWheelCleaner from '../Assets/Images/products/alloy_wheel_cleaner.jpg';
import tyreFoam from '../Assets/Images/products/tyre_foam.jpg';
// Products

// Images End



const Products = () => {
   
  // SEO Tags
  useEffect(() => {
    document.title = 'Products - WÜRTH CAR-Haus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
  }, []);
  // SEO Tags End

  // AOS
  useEffect(() => {
    Aos.init({duration: 400});
  }, []);
  // AOS END
 



  return (
    <>
          <Header/>

          <section className='topBanner'>
            <div className='topBannerImg'>
                <img src={products} alt="products" />
            </div>
            <div className='topBannerText'>
                <div className='container'>
                    <h1 className='sizeH1 tu white'>Products</h1>
                </div>
            </div>
        </section>

        <div className='breadcrumbNav'>
            <div className='container'>
            <div className='breadcrumbNavList'>
                <Link to='/'>Home</Link>
                <Link className='active'>Products</Link>
            </div>
            </div>
        </div>


      <section className='aboutData'>
        <div className='container'>
            <div className='aboutDataRow'>
            <div className='aboutDataCol' data-aos="fade-up">
              <h3 className='sizeH2'>Discover
Premium Excellence<br/>
With <span className='red'>Our Products</span></h3>
            </div>
            <div className='aboutDataCol' data-aos="fade-up">
              <p><b>From cutting-edge technology to innovative solutions, we have curated our products to cater to your unique car care needs.</b> </p>
            </div>

            </div>
        </div>
      </section> 


    <section className='itemList pT'>
      <div className='container'>

      <div className='productsRow'>

{/*hr*/}



{/* Box */}

<div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={tyreFoam} alt="Tyre Foam" />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>Tyre Foam</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Quantity</th>
                            </tr>
                            <tr>
                                <td>0890121525</td>
                                <td>500 ml</td>
                            </tr>
                           
                        </table>
                        <ul>
                            <li>Cleans, maintains and protects</li>
                            <li>Prevents cracking and protects from embrittlement</li>
                            <li>UV-protection and prevents from premature fading, improves appearance</li>
                            <li>Anti-static solvent free, does not attack rubber, aluminium/steel rims or painted surface. Contains silicone, can be used on wet or dry tyres</li>
                        </ul>
                        
                        </div>
                    </div>
                </div>
{/* Box ENd */}

{/* Box */}

<div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={glassCleaner} alt="Glass Cleaner" />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>Glass Cleaner</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Quantity</th>
                            </tr>
                            <tr>
                                <td>0890 25</td>
                                <td>500 ml</td>
                            </tr>
                           
                        </table>
                        <ul>
                            <li>When spraying, a foam is produced, which prevents running off on vertical surfaces, thereby reliably removing stubborn dirt</li>
                            <li>Cleans painted surfaces as well as rubber and plastic parts while remaining gentle on the material</li>
                            <li>Saves money thanks to 20x yield</li>
                            
                        </ul>
                        
                        </div>
                    </div>
                </div>
{/* Box ENd */}


{/* Box */}

<div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={alloyWheelCleaner} alt="Alloy Wheel Cleaner"/>
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>Alloy Wheel Cleaner</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Quantity</th>
                            </tr>
                            <tr>
                                <td>0890 102</td>
                                <td>500 ml</td>
                            </tr>
                           
                        </table>
                        <ul>
                            <li>Saves time and money</li>
                            <li>If used regularly, the original appearance is restored. The build-up of new soiling is prevented</li>
                            
                            
                        </ul>
                        
                        </div>
                    </div>
                </div>
{/* Box ENd */}



{/* Box */}

<div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={new_paint_polish} alt="Tyre Shine" />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>Tyre Shine</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Quantity</th>
                            </tr>
                            <tr>
                                <td>089012 500</td>
                                <td>500 ml</td>
                            </tr>
                           
                        </table>
                        <ul>
                            <li>Cleans, maintains and protects</li>
                            <li>Prevents cracking and protects from embrittlement</li>
                            <li>UV-protection and prevents from premature fading, improves appearance</li>
                            <li>Anti-static solvent free, does not attack rubber, aluminium/steel rims or painted surface. Contains silicone, can be used on wet or dry tyres</li>
                        </ul>
                        
                        </div>
                    </div>
                </div>
{/* Box ENd */}

{/* Box */}

<div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={microfiberCloth}alt="Microfiber Cloth" />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>Microfiber Cloth</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Quantity</th>
                                <th>Available</th>
                            </tr>
                            <tr>
                                <td>0899 900 148</td>
                                <td>3 pcs</td>
                                <td>Blue & Grey</td>
                            </tr>
                           
                        </table>
                        <ul>
                            <li>The double-sided all-rounder for all polishing, care and cleaning tasks in interior and exterior applications in automotive maintenance, cleaning, detailing and painting</li>
                            <li>Perfect for cleaning all high-gloss surfaces such as kitchen fronts, ceramic surfaces and fittings</li>
                            
                            
                        </ul>
                        
                        </div>
                    </div>
                </div>
{/* Box ENd */}


{/*hr*/}












    </div>

      </div>
    </section>

 

 



          <Footer/>
    </>
  )
}

export default Products
