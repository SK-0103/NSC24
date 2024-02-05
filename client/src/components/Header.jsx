import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header({handleLinkClick}) {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
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
  return (
    <header className='bg-black shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 style={{ width:'180px'}}>   
          <img src="/shadow.jpg"/> 
          </h1>
        </Link>

        <ul className='flex gap-14 text-xl'>
        <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>
              Home
            </li>
          </Link>
        <a href="#Schedule">

            <li className='hidden sm:inline text-white hover:underline'>
              Schedule
            </li>
        </a>
          
     
          
          <a href='#Events'>
            <li className='hidden sm:inline text-white hover:underline'>
              Events
            </li>
          </a>
          <a href='#Team'>
            <li className='hidden sm:inline text-white hover:underline'>
              Team
            </li>
          </a>


        </ul>
      </div>
    </header>
  );
}
