import React from 'react'

const ServicesForm = () => {
  return (
    <>
    <section class="lightgreyB">
      <div className='container'>
        <div className="form09 frmS frm-services" id='EnquireNow'><form className="contact_us">
        <h3 class="sizeH4 red center tu">Services Form</h3>
          <div className="form-group"><input className="form-control" placeholder="Your Name" type="text" name="name" /></div>
          <div className="form-group"><input className="form-control" placeholder="Contact No." type="text" name="mobile" /></div>
          <div className="form-group"><input className="form-control" placeholder="City" type="city" name="city" /></div>
          <div className="form-group">
            <textarea placeholder="Type Your Query Here" name="query" className="form-control"></textarea>
          </div>
          <div class="clearfix"></div>
          <div className="form-group btn09">
            <button className='btnS2 white fontBold blackB tu' type="submit">Submit</button>
          </div>
        </form></div>
        
      </div>
    </section>
    


    </>
  )
}

export default ServicesForm
