import React, { useEffect } from 'react';

const FranchiseEnquiry = ({ closeModal }) => {
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
                    <div className="form09 frmS" id='EnquireNow'>
                        <form className="contact_us">
                            <h3 className="sizeH4 red center tu">Franchise Enquiry</h3>
                         
                         <div className='flexFm'>
                              <div className="form-group">
                                  <input className="form-control" placeholder="Name" type="text" name="name" />
                              </div>
                              <div className="form-group">
                                  <input className="form-control" placeholder="Surname" type="text" name="surname" />
                              </div>
                        </div>
                        <div className='flexFm'>
                            <div className="form-group">
                                <input className="form-control" placeholder="Mobile number" type="text" name="mobile" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Email address" type="email" name="email" />
                            </div>
                          </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Firm name" type="text" name="firmName" />
                            </div>
                          <div className='flexFm'>
                            <div className="form-group">
                                <input className="form-control" placeholder="City" type="text" name="city" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Pincode" type="text" name="pincode" />
                            </div>
                          </div>
                            <div className="form-group flexfild">
                                <label>
                                   <span> Are you an OEM dealer: </span>
                                    <input type="checkbox" name="oemDealer" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                   
                                    <input type="text" name="howDidYouHear" placeholder=' How did you hear about us?: '/>
                                </label>
                            </div>
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

export default FranchiseEnquiry;
