import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Error = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]); // Initialize with 0

  useEffect(() => {
    document.title = '404 - CarHaus WÜRTH';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }

    // Function to start counting animation
    const startCounting = () => {
      const targetCounters = [1000, 5000, 1020, 1300]; // Your target numbers
      const interval = 20; // Interval between each increment (in milliseconds)
      const steps = 50; // Number of steps to reach the target

      targetCounters.forEach((target, index) => {
        const step = Math.ceil(target / steps);
        let currentCount = 0;

        const counterInterval = setInterval(() => {
          currentCount += step;
          if (currentCount >= target) {
            currentCount = target;
            clearInterval(counterInterval);
          }

          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = currentCount;
            return newCounters;
          });
        }, interval);
      });
    };

    startCounting(); // Start the counting animation
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

      <div className='counters'>
        {counters.map((count, index) => (
          <div className='count' key={index}>
            <span className='count-number'>{count}</span>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Error;
