import React, { useState, useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';

const Landing = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 500; // Adjust the division factor for the desired scroll distance
    setScrollOpacity(opacity < 0 ? 0 : opacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(./back.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='flex flex-col gap-3 p-28 px-3 max-w-6xl'>
        <h1 className='text-yellow-600 font-bold text-xl lg:text-5xl self-center font-serif' style={{ opacity: scrollOpacity }}>
          NATIONAL STUDENTS CONVENTION '24
        </h1>
        <br></br>
        <h1 className='text-slate-300 font-bold text-3xl lg:text-6xl self-center' style={{ opacity: scrollOpacity }}>
          1<sup>st</sup> March - 2<sup>nd</sup> March 2024
        </h1>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://bvicam.ac.in/nsc/addmember.asp" 
        target="_blank" rel="noopener noreferrer" // Add your register link here
        style={{
          backgroundColor: '#4a5568', // Slate color
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          textDecoration: 'none',
          width: '120px',
          transition: 'background-color 0.3s, width 0.3s',
        }}
        className="hover:bg-gray-700 hover:w-96 text-center" // Apply hover effect
      >
        Register
      </a>
      </div>
        <CountdownTimer></CountdownTimer>
      </div>
    </div>
  );
}

export default Landing;

