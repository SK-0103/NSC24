// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaInstagramSquare, FaFacebookSquare, FaGooglePlusSquare, FaYoutubeSquare } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function Footer() {
//   return (
//     <div>
//         <div>
//         <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BVICAM+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>        
//         </div>
        
//         <center className='bg-green-100'>
//         <div style={{fontSize:'20px', marginBottom:'10px'}} className='bg-green-100 font-bold'>Follow For More Updates</div>
        
        
//           <ul style={{display:'flex', justifyContent:'center',}} className='bg-green-100'>
//             <li>
//               <a href="https://goo.gl/maps/K6uS1xE64fiAoLHv8">
//               <FaGoogle className='mr-4'style={{fontSize:'30px'}} />
//               </a>
//             </li>
//             <li>
//             <a href="https://www.facebook.com/BVICAMsNSC/">
//               <FaFacebook className='mr-4' style={{fontSize:'30px',color:''}} />
//             </a>
//             </li>
//             <li>
//             <a href="https://www.instagram.com/bvicamnsc/">
//               <FaInstagram className='mr-4' style={{fontSize:'30px'}} />
//             </a>
//             </li> 
//             <li>
//             <a href="https://www.youtube.com/channel/UCuOPY-98JUY9T2igRpj8tIQ">
//               <FaYoutube className='mr-4' style={{fontSize:'30px'}} />
//             </a>
//             </li> 
//           </ul>
        
//         </center>




//         <div className='bg-green-100'>      
//         <button>
//         <a href='/profile'>Admin</a>
//         </button>
//         </div>
//     </div>
//   );
// }

        {/* <div className="bg-green-100 p-2 rounded-lg">
          <button className="bg-gray-900 text-white py-1 px-2 rounded-full">
            <a href="/profile">Admin</a>
          </button>
        </div> */}
// import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

// export default function Footer() {
//   return (
    
//     <div className="bg-gray-900 text-white py-6">
//          <div>
//         <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BVICAM+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>        
//         </div>
//       <div className="container mx-auto flex flex-col items-center">
//         <div className="mb-6">
//           {/* Google Map remains here if you decide to keep it */}
//         </div>

//         <div className="bg-green-100 p-4 rounded-lg mb-4 w-auto">
//           <h2 className="text-xl font-bold mb-2 text-black">Follow For More Updates</h2>
//           <ul className="flex items-center justify-center text-black">
//             <li className="mr-4">
//               <a href="https://goo.gl/maps/K6uS1xE64fiAoLHv8" target="_blank" rel="noopener noreferrer">
//                 <FaGoogle className="" style={{ fontSize: '24px' }} />
//               </a>
//             </li>
//             <li className="mr-4">
//               <a href="https://www.facebook.com/BVICAMsNSC/" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook style={{ fontSize: '24px' }} />
//               </a>
//             </li>
//             <li className="mr-4">
//               <a href="https://www.instagram.com/bvicamnsc/" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram style={{ fontSize: '24px' }} />
//               </a>
//             </li>
//             <li className="mr-4">
//               <a href="https://www.youtube.com/channel/UCuOPY-98JUY9T2igRpj8tIQ" target="_blank" rel="noopener noreferrer">
//                 <FaYoutube style={{ fontSize: '24px' }} />
//               </a>
//             </li>
//           </ul>
//           <div className="mt-2 text-black font-bold ">
//             Built <button>
//          <a href='/profile'>With</a>
//          </button> <code>&lt;/&gt;</code> by Kanika and Shaunit
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// }
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-6">
      <div>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BVICAM+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div className="container mx-auto flex flex-col items-center "> {/* Adjusted width using max-w-6xl */}
        <div className="mb-6">
          {/* Google Map remains here if you decide to keep it */}
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-4 w-11/12 text-center">
          <h2 className="text-xl font-bold mb-2 text-black ">Follow For More Updates</h2>
          <ul className="flex items-center justify-center text-black">
            <li className="mr-4">
              <a href="https://goo.gl/maps/K6uS1xE64fiAoLHv8" target="_blank" rel="noopener noreferrer">
                <FaGoogle className="" style={{ fontSize: '24px' }} />
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.facebook.com/BVICAMsNSC/" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{ fontSize: '24px' }} />
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.instagram.com/bvicamnsc/" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ fontSize: '24px' }} />
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.youtube.com/channel/UCuOPY-98JUY9T2igRpj8tIQ" target="_blank" rel="noopener noreferrer">
                <FaYoutube style={{ fontSize: '24px' }} />
              </a>
            </li>
          </ul>
          <div className="mt-2 text-black font-bold">
            Built <button><a href='/profile'>With</a></button> <code>&lt;/&gt;</code> by Kanika and Shaunit
          </div>
        </div>
      </div>
    </div>
  );
}

