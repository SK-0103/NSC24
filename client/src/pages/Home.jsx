import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaInstagramSquare, FaFacebookSquare, FaGooglePlusSquare, FaYoutubeSquare } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Landing from '../components/Landing';
import Schedule from '../components/Schedule';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=15');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=15');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=15');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className='bg-black'>
      {/* top */}
      <Fade>
        <Landing />
      </Fade>
      <Fade>
        <Schedule />
      </Fade>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {rentListings && rentListings.length > 0 && (
          <div>
            <center>
              <div className='my-3'>
                <hr style={{ height: '3px', width: 'auto', color: '#333' }}></hr>
                <h2 className='text-3xl font-semibold text-slate-100 '>EVENTS</h2>
                <hr style={{ height: '40px', width: 'auto', color: '#333' }}></hr>
              </div>
            </center>
            <div className='flex flex-wrap mx-3 gap-14'>
              {rentListings.map((listing) => (
                <Fade key={listing._id}>
                  <ListingItem listing={listing} />
                </Fade>
              ))}
            </div>
          </div>
        )}
      </div>
      <Fade>
        <Team />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </div>
  );
}

