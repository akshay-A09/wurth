import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Error = () => {

  useEffect(() => {
    document.title = '404 - CarHaus WÜRTH';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }
   
  }, []);

  return (
    <>
      <Header />
      <div className='error404'>
        <div className='container'>
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <p>The page you are looking for might have been removed or had its name changed or is temporarily unavailable.</p>
          <Link to='/'>Go To Homepage</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
