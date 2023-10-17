import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import BookAnAppointment from './Forms/BookAnAppointment'
import FranchiseEnquiry from './Forms/FranchiseEnquiry'


const Footer = () => {

  
 // Form PopUp
 const [OpenModalBookAnAppointment, setOpenModalBookAnAppointment] = React.useState(false);

 const [OpenModalFranchiseEnquiry, setOpenModalFranchiseEnquiry] = React.useState(false);

  return (
    <>
      <footer>
        <div className='ftSocial center'><div className='container'>
          <h2 className='sizeH3 tu'><span className='tu fontBold red wp'>WÜRTH Car<span className='fontBook'>-Haus</span></span> on social</h2>
          <ul>
          <li><Link to='/'><i><FaFacebookF /></i> Facebook</Link></li>
          <li><Link to='/'><i><FaInstagram /></i> Instagram</Link></li>
          <li><Link to='/'><i><FaLinkedinIn /></i> Linkedin</Link></li>
          <li><Link to='/'><i><FaYoutube /></i> Youtube</Link></li>
          </ul>
        </div></div>

        <div className='ftNavs'><div className='container'>

          <div className='ftNavsL'>


          <div className='ftNavsLLink'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/'>Blogs</Link>
          <Link onClick={() => { setOpenModalBookAnAppointment(true); }}>Book on Appoinment</Link>
          <Link onClick={() => { setOpenModalFranchiseEnquiry(true); }}>Franchise Enquiry</Link>
          </div>
          

        <div className='subNews'>
          <h3 className='sizeH3 red'>Stay updated<br/> with the latest offers,<br/> news and more.</h3>

       
      <form className='stayUpdated'>
       <div className='stayUpdatedCol'>
        <label>
          <input type="email" placeholder='Email  ID'  required />
        </label>
        <button type="submit"><FaArrowRight/></button>
        </div>
      </form>
       
        </div>


          </div>

          <div className='ftNavsR'>
          <h3 className='sizeH5 red tu'>Services</h3>
  <div className='svrList'>


<div className='svrListCol'>
<ul>
<li><h4>EXTERIOR</h4></li>
<li><Link to='/'>WÜRTH Cera-Maxx</Link></li>
<li><Link to='/'>WÜRTH Paint Protection Film</Link></li>
<li><Link to='/'>WÜRTH Gloss Seal</Link></li>
<li><Link to='/'>Exterior Enrich</Link></li>
<li><Link to='/'>Paint Revive</Link></li>
<li><Link to='/'>UV Shield </Link></li>
</ul>

<ul>
<li><h4>INTERIOR</h4></li>
<li><Link to='/'>Micro B clean plus </Link></li>
<li><Link to='/'>Micro B Clean</Link></li>
<li><Link to='/'>Micro Classy</Link></li>
</ul>
</div>



<div className='svrListCol'>
<ul>
<li><h4>CAR WASH</h4></li>
<li><Link to='/'>Blue Wash</Link></li>
<li><Link to='/'>Green Wash</Link></li>
</ul>

<ul>
<li><h4>ANTI RUST</h4></li>
<li><Link to='/'>Underbody Rust Off</Link></li>
<li><Link to='/'>Underbody Rust Off X-treme</Link></li>
<li><Link to='/'>Cavity Wax Protection</Link></li>
<li><Link to='/'>Exhaust Coating</Link></li>
</ul>

<ul>
<li><h4>A/C SERVICES</h4></li>
<li><Link to='/'>A/C Vent Cleaning</Link></li>
</ul>

</div>



<div className='svrListCol'>
 
<ul>
<li><h4>OTHER APPLICATIONS</h4></li>
<li><Link to='/'>Headlight Restoration</Link></li>
<li><Link to='/'>Windshield Polish</Link></li>
<li><Link to='/'>Emblem Cleaning</Link></li>
<li><Link to='/'>Service Plus </Link></li>
<li><Link to='/'>Acoustics-4 DSD </Link></li>
<li><Link to='/'>Alloy Wheel Polish</Link></li>
<li><Link to='/'>Engine Coat</Link></li>
<li><Link to='/'>Rodent Repellent</Link></li>
</ul>
</div>





</div>

          </div>


        </div></div>


        <div className='ftConnect'><div className='container'>
        <div className='ftConnectL'>
          <h3 className='sizeH2 red'>Connect <br/> with us<br/></h3>
        </div>

        <div className='ftConnectR locData'>
        <h4>Business Hours: Mon - Fri 10.30 am - 7pm</h4>
            <p>Wuerth India Pvt. Ltd. 703/704, Sahar Windfall, Sahar Plaza Complex, Andheri – Kurla Road, J B Nagar, Andheri (East), Mumbai, Maharashtra – 400059</p>
            
            <h4 className='fLinkC'><Link to="tel:+912267377600" target='_blank' className='IconFaLink wp'><FaPhoneAlt/> +91 22 6737 7600</Link><span className='line'>|</span><Link to="mailto:info.wuerth@wuerth.in" target='_blank' className='IconFaLink wp'><FaEnvelope/> info.wuerth@wuerth.in</Link></h4>
            
            <h4 className='fLinkC'> <Link to="tel:18001025061" target='_blank' className='IconFaLink wp'>Toll Free Number: 18001025061</Link></h4>

        </div>

        </div></div>


        <div className='ftConnectWurth'><div className='container'>
        <Link to='/'>WÜRTH Group </Link>
        <span>|</span>
        <Link to='/'>WÜRTH International</Link> 
        <span>|</span>
        <Link to='/'>WÜRTH India</Link>

        </div></div>

        <div className='ftbottom'><div className='container'>

          <ul>
          <li>Copyright @2023</li>
          <li>
            <Link to='/'>Privacy Policy</Link> |
            <Link to='/'>Terms of Service</Link>
          </li>
          <li><Link to='https://www.agency09.in/' target='_blank'>AGENCY<span>09</span></Link></li>
          </ul>

        </div></div>

      </footer>



      <div className='bookanappointment_btm'><Link onClick={() => { setOpenModalBookAnAppointment(true); }}>Book an Appointment</Link></div>


      {OpenModalBookAnAppointment && <BookAnAppointment closeModal={setOpenModalBookAnAppointment} />}
      {OpenModalFranchiseEnquiry && <FranchiseEnquiry closeModal={setOpenModalFranchiseEnquiry} />}

      

    </> 
  )
}

export default Footer
