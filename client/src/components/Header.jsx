



// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { FaSearch, FaBars } from 'react-icons/fa';
// // ... (previous imports)

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(window.location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);

//   const handleMobileMenuToggle = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };


//   return (
//     <header className='bg-black shadow-md'>
//       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 style={{ width: '180px' }}>
//             <img src="/shadow.jpg" alt="Logo" />
//           </h1>
//         </Link>

//         <ul className={`flex flex-col sm:flex-row gap-4 sm:gap-14 text-xl transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
//           <Link to='/'>
//             <li className='text-white hover:underline'>
//               Home
//             </li>
//           </Link>
//           <a href="#Schedule">
//             <li className='text-white hover:underline'>
//               Schedule
//             </li>
//           </a>
//           <a href='#Events'>
//             <li className='text-white hover:underline'>
//               Events
//             </li>
//           </a>
//           <a href='#Team'>
//             <li className='text-white hover:underline'>
//               Team
//             </li>
//           </a>
//         </ul>

//         <div className="sm:hidden">
//           <button onClick={handleMobileMenuToggle} className="text-white">
//             <FaBars />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

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

        {/* Mobile View - Bars Icon */}
        <div className="sm:hidden">
          <button onClick={handleMobileMenuToggle} className="text-white">
            <FaBars />
          </button>
          {isMobileMenuOpen && (
            <ul className="flex flex-col gap-4 text-xl">
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
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <ul className="flex flex-row gap-14 text-xl">
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
        </div>
      </div>
    </header>
  );
}
