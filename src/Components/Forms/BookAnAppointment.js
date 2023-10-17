import React, { useEffect } from 'react';

const BookAnAppointment = ({ closeModal }) => {

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);


    return (
        <>
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button className='modalClose' onClick={() => closeModal(false)}>X</button>
        <div className="form09 frmS" id='EnquireNow'><form className="contact_us">
        <h3 class="sizeH4 red center tu">Book an Appointment</h3>
          <div className="form-group"><input className="form-control" placeholder="Your Name" type="text" name="name" /></div>
          <div className="form-group"><input className="form-control" placeholder="Contact No." type="text" name="mobile" /></div>
          <div className="form-group"><input className="form-control" placeholder="Email" type="email" name="email" /></div>
          <div className="form-group">
            <textarea placeholder="Type Your Query Here" name="query" className="form-control"></textarea>
          </div>
          <div className="form-group btn09">
            <button className='btnS2 white fontBold blackB tu' type="submit">Submit</button>
          </div>
        </form>
        </div>
        </div>
    </div>
        </>
    )
}

export default BookAnAppointment
