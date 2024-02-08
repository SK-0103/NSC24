
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaBookOpen,
  FaCalendar,
  FaCalendarCheck,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import Head from '../components/Head';
import './Listing.css'; // Import your CSS file for styling
import { Fade } from 'react-awesome-reveal';

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="background-wrapper">
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        
        <div>
          <Head></Head>
          <div>
            {/* {listing.imageUrls.map((url, index) => (
              <div
                key={index}
                className='h-[500px] w-108  '
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: '',
                }}
              ></div>
            ))} */}
            <img src="/bg2.jpg" alt="Background Image" className="background-image" />
            <Fade>
            <div className='flex flex-col max-w-4xl mx-auto p-3 my-5 gap-2'>
              
              <p className='text-5xl font-serif font-bold self-center '>
                {listing.name}
              </p>
              
              <p className='flex items-center text-2xl self-center mt-5 gap-2 text-black'>
                <FaCalendarCheck className='text-green-700' />
                {listing.address}
              </p>

              <div className='border rounded-lg overflow-hidden shadow-2xl  p-4 mt-4 bg-slate-200'>
                <p className='text-slate-800'>
                  <span className='font-bold text-black '>Rules: </span>

                  <div style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }} className='border: 1px solid #ccc;padding: 10px;border-radius: 5px;overflow-x: auto;max-width: 300px;text: font-sans max-width: 100%;'>
                    {listing.description}
                  </div>
                </p>
              </div>
              <a className='bg-green-600 text-white rounded-lg uppercase hover:opacity-95 p-3 text-center ' href={listing.link}>
                <button
                  onClick={() => setContact(true)}>
                  REGISTER HERE
                </button>
              </a>
            </div>
            </Fade>

          </div>
        </div>
        
      )}
    </main>
  );
}
