import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer>
        <div className='ftSocial center'><div className='container'>
          <h2 className='sizeH3 tu'><span className='tu fontBold red'>Würth Car<span className='fontBook'>-Haus</span></span> on social</h2>
          <ul>
          <li><Link to='/'><i><FaFacebookF /></i> Facebook</Link></li>
          <li><Link to='/'><i><FaInstagram /></i> Instagram</Link></li>
          <li><Link to='/'><i><FaLinkedinIn /></i> Linkedin</Link></li>
          <li><Link to='/'><i><FaYoutube /></i> Youtube</Link></li>
          </ul>
        </div></div>

        <div className='ftNavs'><div className='container'>

          <div className='ftNavsL'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/'>Blogs</Link>
          <Link to='/'>Book on Appoinment</Link>
          <Link to='/'>Franchise Enquiry</Link>
          </div>

          <div className='ftNavsR'>
          <h3 className='sizeH5 red tu'>Services</h3>
          <ul>
            <li><Link to='/services/wurth-paint-protection-film'>Paint Protection Film</Link></li>
            <li><Link to='/'>Car Wash</Link></li>
            <li><Link to='/'>Detailing</Link></li>
            <li><Link to='/'>Ceramic Coating</Link></li>
            <li><Link to='/'>Leather Conditioning</Link></li>
            <li><Link to='/'>Fabric Protection</Link></li>
            <li><Link to='/'>Wheel & Tire Care</Link></li>
            <li><Link to='/'>Odor Elimination</Link></li>
            <li><Link to='/'>Paint Correction</Link></li>

            <li><Link to='/'>Paint Protection Film</Link></li>
            <li><Link to='/'>Car Wash</Link></li>
            <li><Link to='/'>Detailing</Link></li>
            <li><Link to='/'>Ceramic Coating</Link></li>
            <li><Link to='/'>Leather Conditioning</Link></li>
            <li><Link to='/'>Fabric Protection</Link></li>
            <li><Link to='/'>Wheel & Tire Care</Link></li>
            <li><Link to='/'>Odor Elimination</Link></li>
            <li><Link to='/'>Paint Correction</Link></li>

            <li><Link to='/'>Paint Protection Film</Link></li>
            <li><Link to='/'>Car Wash</Link></li>
            <li><Link to='/'>Detailing</Link></li>
            <li><Link to='/'>Ceramic Coating</Link></li>
            <li><Link to='/'>Leather Conditioning</Link></li>
            <li><Link to='/'>Fabric Protection</Link></li>
            <li><Link to='/'>Wheel & Tire Care</Link></li>
            <li><Link to='/'>Odor Elimination</Link></li>
            <li><Link to='/'>Paint Correction</Link></li>

          </ul>

          </div>


        </div></div>


        <div className='ftConnect'><div className='container'>
        <div className='ftConnectL'>
          <h3 className='sizeH2 red'>Connect <br/> with us<br/></h3>
        </div>

        <div className='ftConnectR locData'>
        <h4>Business Hours: Mon - Fri 10.30 am - 7pm</h4>
            <p>Wuerth India Pvt. Ltd. 703/704, Sahar Windfall, Sahar Plaza Complex, Andheri – Kurla Road, J B Nagar, Andheri (East), Mumbai, Maharashtra – 400059</p>
            
            <h4><Link to="tellto:+912267377600" target='_blank' className='IconFaLink'><FaPhoneAlt/> +91 22 6737 7600</Link><span className='line'>|</span><Link to="mailto:info.wuerth@wuerth.in" target='_blank' className='IconFaLink'><FaEnvelope/> info.wuerth@wuerth.in</Link></h4>
            
            <h4><Link to="tellto:18001025061" target='_blank' className='IconFaLink'>Toll Free Number: 18001025061</Link></h4>

        </div>

        </div></div>


        <div className='ftConnectWurth'><div className='container'>
        <Link to='/'>Würth Group </Link>
        <span>|</span>
        <Link to='/'>Würth International</Link> 
        <span>|</span>
        <Link to='/'>Würth India</Link>

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



      <div className='bookanappointment_btm'><Link to='/'>Book an Appointment</Link></div>
    </> 
  )
}

export default Footer
