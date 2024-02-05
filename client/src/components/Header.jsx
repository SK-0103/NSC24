// import { FaSearch } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

// export default function Header({ handleLinkClick }) {
//   const { currentUser } = useSelector((state) => state.user);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleMenuLinkClick = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(window.location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [window.location.search]);

//   return (
//     <header className='bg-black shadow-md'>
//       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 style={{ width: '180px' }}>
//             <img src="/shadow.jpg" alt="Logo" />
//           </h1>
//         </Link>

//         {/* Responsive Menu Button */}
//         <div className={`sm:hidden cursor-pointer ${isMobileMenuOpen ? 'hidden' : ''}`} onClick={toggleMobileMenu}>
//           <div className='w-6 h-2 border-t-2 border-white mb-1'></div>
//           <div className='w-6 h-2 border-t-2 border-white mb-1'></div>
//           <div className='w-6 h-2 border-t-2 border-white'></div>
//         </div>

//         {/* Navigation Links for Mobile View */}
//         {isMobileMenuOpen && (
//           <ul className='sm:hidden flex flex-row gap-2 text-xl'>
//             <Link to='/' onClick={handleMenuLinkClick}>
//               <li className='text-white hover:underline'>Home</li>
//             </Link>
//             <a href="#Schedule" onClick={handleMenuLinkClick}>
//               <li className='text-white hover:underline'>Schedule</li>
//             </a>
//             <a href='#Events' onClick={handleMenuLinkClick}>
//               <li className='text-white hover:underline'>Events</li>
//             </a>
//             <a href='#Team' onClick={handleMenuLinkClick}>
//               <li className='text-white hover:underline'>Team</li>
//             </a>
//           </ul>
//         )}

//         {/* Navigation Links for Desktop View */}
//         <ul className={`hidden sm:flex gap-14 text-xl`}>
//           <Link to='/' onClick={handleMenuLinkClick}>
//             <li className='text-white hover:underline'>Home</li>
//           </Link>
//           <a href="#Schedule" onClick={handleMenuLinkClick}>
//             <li className='text-white hover:underline'>Schedule</li>
//           </a>
//           <a href='#Events' onClick={handleMenuLinkClick}>
//             <li className='text-white hover:underline'>Events</li>
//           </a>
//           <a href='#Team' onClick={handleMenuLinkClick}>
//             <li className='text-white hover:underline'>Team</li>
//           </a>
//         </ul>
//       </div>
//     </header>
//   );
// }



import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
// ... (previous imports)

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };


  return (
    <header className='bg-black shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 style={{ width: '180px' }}>
            <img src="/shadow.jpg" alt="Logo" />
          </h1>
        </Link>

        <ul className={`flex flex-col sm:flex-row gap-4 sm:gap-14 text-xl transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <Link to='/'>
            <li className='text-white hover:underline'>
              Home
            </li>
          </Link>
          <a href="#Schedule">
            <li className='text-white hover:underline'>
              Schedule
            </li>
          </a>
          <a href='#Events'>
            <li className='text-white hover:underline'>
              Events
            </li>
          </a>
          <a href='#Team'>
            <li className='text-white hover:underline'>
              Team
            </li>
          </a>
        </ul>

        <div className="sm:hidden">
          <button onClick={handleMobileMenuToggle} className="text-white">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

