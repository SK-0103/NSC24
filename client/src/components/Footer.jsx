import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaInstagramSquare, FaFacebookSquare, FaGooglePlusSquare, FaYoutubeSquare } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Footer() {
  return (
    <div>
        <div>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BVICAM+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>        
        </div>
        
        <center className='bg-green-100'>
        <div style={{fontSize:'20px', marginBottom:'10px'}} className='bg-green-100 font-bold'>Follow For More Updates</div>
        
        
          <ul style={{display:'flex', justifyContent:'center',}} className='bg-green-100'>
            <li>
              <a href="https://goo.gl/maps/K6uS1xE64fiAoLHv8">
              <FaGoogle className='mr-4'style={{fontSize:'30px'}} />
              </a>
            </li>
            <li>
            <a href="https://www.facebook.com/BVICAMsNSC/">
              <FaFacebook className='mr-4' style={{fontSize:'30px',color:''}} />
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/bvicamnsc/">
              <FaInstagram className='mr-4' style={{fontSize:'30px'}} />
            </a>
            </li> 
            <li>
            <a href="https://www.youtube.com/channel/UCuOPY-98JUY9T2igRpj8tIQ">
              <FaYoutube className='mr-4' style={{fontSize:'30px'}} />
            </a>
            </li> 
          </ul>
        
        </center>




        <div className='bg-green-100'>      
        <button>
        <a href='/profile'>Admin</a>
        </button>
        </div>
    </div>
  );
}
