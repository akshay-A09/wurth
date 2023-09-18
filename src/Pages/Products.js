import React, {useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
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

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs

// Images
import products from '../Assets/Images/topBanners/products.jpg'

// Products
import DiamondCut from '../Assets/Images/products/diamond_cut.jpg';
import foam_pad_black from '../Assets/Images/products/foam_pad-black.jpg';
import foam_pad_yellow from '../Assets/Images/products/foam_pad-yellow.jpg';
import gloss_seadl_250_ml from '../Assets/Images/products/gloss_seal_250_ml.jpg';
import masking_tape from '../Assets/Images/products/masking_tape.jpg';
import micro_fiber_cloth from '../Assets/Images/products/micro_fiber_cloth.jpg';
import new_paint_polish from '../Assets/Images/products/new_paint_polish.jpg';
import paint_restoration_polish from '../Assets/Images/products/paint_restoration_polish.jpg';
import wax_n_shine from '../Assets/Images/products/wax_n_shine.jpg';
import wool_grip_pa from '../Assets/Images/products/wool_grip_pad.jpg';



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
                <img src={products} />
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
              <p><b>From cutting-edge technology to innovative solutions, we have curated our products to cater to your unique car care needs</b> </p>
            </div>

            </div>
        </div>
      </section> 



  <section className='itemList pT'>
      <div className='container'>

      <Tabs>
            <TabList>
                <Tab><span>PAINT FINISH</span></Tab>
                <Tab><span>PAINT FINISH - PERFECTION LINE</span></Tab>
                <Tab><span>CARE, CLEANING, DRESSING, PROTECTION & LUBRICATION</span></Tab>
                <Tab><span>AC CLEANING & DISINFECTANT</span></Tab>
                <Tab><span>ANTI - RUST & SOUND DAMPENING</span></Tab>
                <Tab><span>ADDITIVE PROGRAMME</span></Tab>
                <Tab><span>APPLIANCES & ACCESSORIES</span></Tab>
            </TabList>

            <TabPanel className=''>


            <div className='productsRow'>

            <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={DiamondCut} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>DIAMOND CUT</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Content</th>
                            </tr>
                            <tr>
                                <td>0893463001</td>
                                <td>1 L</td>
                            </tr>
                            <tr>
                                <td>0893463010</td>
                                <td>100 ml</td>
                            </tr>
                        </table>
                        
                        </div>
                    </div>
                </div>

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={paint_restoration_polish} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>PAINT RESTORATION POLISH</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Content</th>
                            </tr>
                            <tr>
                                <td>0893463001</td>
                                <td>1 L</td>
                            </tr>
                            <tr>
                                <td>0893463010</td>
                                <td>100 ml</td>
                            </tr>
                        </table>
                        <p>Balanced combination of waxes & polymers</p>
                        
                        </div>
                    </div>
                </div>

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={new_paint_polish} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>NEW PAINT POLISH</h4>
                        <table>
                            <tr>
                                <th>Art. No.</th>
                                <th>Content</th>
                            </tr>
                            <tr>
                                <td>0893463001</td>
                                <td>1 L</td>
                            </tr>
                            <tr>
                                <td>0893463010</td>
                                <td>100 ml</td>
                            </tr>
                        </table>
                        <ul>
                            <li>For all new uni and metallic paints.</li>
                            <li>Effortlessly removes car wash scratches, insect residues, tar and other light paint dirt.</li>
                            <li>Gives paint back its intensive deep shine.</li>
                        </ul>
                        
                        </div>
                    </div>
                </div>
 

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={wax_n_shine} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>WAX ‘N’ SHINE</h4>
                        <h4>Art. No. 089310004</h4>
                        <ul>
                         <li>Wax based polish</li>
                         <li>Makes colours vibrant</li> 
                        </ul>
                        </div>
                    </div>
                </div>

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={gloss_seadl_250_ml} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>GLOSS SEAL 250 ml</h4>
<h4>Art. No. 08930126</h4>
                        <ul> 
                        <li>Sealing compound after Diamond cut+ new gloss seal</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={wool_grip_pa} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>WOOL GRIP PAD</h4>
<h4>Art. No. NDI00001969901</h4>
                        </div>
                    </div>
                </div>
 

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={foam_pad_yellow} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>FOAM PAD - YELLOW</h4>
<h4>Art. No. NDI0000188990</h4>
                        </div>
                    </div>
                </div>

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={foam_pad_black} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>FOAM PAD - BLACK</h4>
                        <h4>Art. No. NDI0000187990</h4>
                        <ul>
                        <li>Sealing compound after Diamond cut+ new gloss seal</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={micro_fiber_cloth} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>MICRO FIBER CLOTH</h4>
                        <h4>Art. No. 0899900117</h4>
                      <p>Microactive cloth for professional maintenance cleaning and
vehicle valeting</p>
                        
                        </div>
                    </div>
                </div>
 


                <div className='productsCol'>
                    <div className='productsColClick'>
                        <div className='productsColBg'>
                            <img src={masking_tape} />
                        </div>
                        <div className='productsColCont'>
                        <h4 className='red'>MASKING TAPE</h4>
                        <h4>Art. No. 0992068024</h4>
                        <ul>
                            <li>Slightly crepe paper adhesive tape for general masking tasks.</li>
                            <li>Excellent adhesion on smooth and painted surfaces</li>
                        </ul>
                        </div>
                    </div>
                </div>
 






            </div>

            </TabPanel>


<TabPanel>
    
<div className='productsRow'>

<div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={DiamondCut} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>DIAMOND CUT</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            
            </div>
        </div>
    </div>

    <div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={paint_restoration_polish} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>PAINT RESTORATION POLISH</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            <p>Balanced combination of waxes & polymers</p>
            
            </div>
        </div>
    </div>

    </div>
</TabPanel>


<TabPanel>
    
<div className='productsRow'>

<div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={DiamondCut} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>DIAMOND CUT</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            
            </div>
        </div>
    </div>

    <div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={paint_restoration_polish} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>PAINT RESTORATION POLISH</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            <p>Balanced combination of waxes & polymers</p>
            
            </div>
        </div>
    </div>

    </div>
</TabPanel>
      
<TabPanel>
    
    <div className='productsRow'>
    
    <div className='productsCol'>
            <div className='productsColClick'>
                <div className='productsColBg'>
                    <img src={DiamondCut} />
                </div>
                <div className='productsColCont'>
                <h4 className='red'>DIAMOND CUT</h4>
                <table>
                    <tr>
                        <th>Art. No.</th>
                        <th>Content</th>
                    </tr>
                    <tr>
                        <td>0893463001</td>
                        <td>1 L</td>
                    </tr>
                    <tr>
                        <td>0893463010</td>
                        <td>100 ml</td>
                    </tr>
                </table>
                
                </div>
            </div>
        </div>
    
        <div className='productsCol'>
            <div className='productsColClick'>
                <div className='productsColBg'>
                    <img src={paint_restoration_polish} />
                </div>
                <div className='productsColCont'>
                <h4 className='red'>PAINT RESTORATION POLISH</h4>
                <table>
                    <tr>
                        <th>Art. No.</th>
                        <th>Content</th>
                    </tr>
                    <tr>
                        <td>0893463001</td>
                        <td>1 L</td>
                    </tr>
                    <tr>
                        <td>0893463010</td>
                        <td>100 ml</td>
                    </tr>
                </table>
                <p>Balanced combination of waxes & polymers</p>
                
                </div>
            </div>
        </div>
    
        </div>
    </TabPanel>
<TabPanel>
    
<div className='productsRow'>

<div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={DiamondCut} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>DIAMOND CUT</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            
            </div>
        </div>
    </div>

    <div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={paint_restoration_polish} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>PAINT RESTORATION POLISH</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            <p>Balanced combination of waxes & polymers</p>
            
            </div>
        </div>
    </div>

    </div>
</TabPanel>   

<TabPanel>
    
<div className='productsRow'>

<div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={DiamondCut} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>DIAMOND CUT</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            
            </div>
        </div>
    </div>

    <div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={paint_restoration_polish} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>PAINT RESTORATION POLISH</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            <p>Balanced combination of waxes & polymers</p>
            
            </div>
        </div>
    </div>

    </div>
</TabPanel>


<TabPanel>
    
<div className='productsRow'>

<div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={DiamondCut} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>DIAMOND CUT</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            
            </div>
        </div>
    </div>

    <div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={paint_restoration_polish} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>PAINT RESTORATION POLISH</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            <p>Balanced combination of waxes & polymers</p>
            
            </div>
        </div>
    </div>

    </div>
</TabPanel>




<TabPanel>
    
<div className='productsRow'>

<div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={DiamondCut} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>DIAMOND CUT</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            
            </div>
        </div>
    </div>

    <div className='productsCol'>
        <div className='productsColClick'>
            <div className='productsColBg'>
                <img src={paint_restoration_polish} />
            </div>
            <div className='productsColCont'>
            <h4 className='red'>PAINT RESTORATION POLISH</h4>
            <table>
                <tr>
                    <th>Art. No.</th>
                    <th>Content</th>
                </tr>
                <tr>
                    <td>0893463001</td>
                    <td>1 L</td>
                </tr>
                <tr>
                    <td>0893463010</td>
                    <td>100 ml</td>
                </tr>
            </table>
            <p>Balanced combination of waxes & polymers</p>
            
            </div>
        </div>
    </div>

    </div>
</TabPanel>
      </Tabs>

      </div>
  </section>

 

 



          <Footer/>
    </>
  )
}

export default Products
