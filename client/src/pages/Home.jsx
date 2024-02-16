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
import './home.css';
import Header from '../components/Header';


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
    <div>
      <Header></Header>
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
          <center className=''>
            <div className='max-w-6xl mx-auto my-3 flex flex-col ' id='Map' >
              <hr style={{ height: '3px', width: 'auto', color: '#333', }}></hr>
              <h2 className='text-3xl font-semibold text-slate-100 '>MAP</h2>
              <hr style={{ height: '40px', width: 'auto', color: '#333', }}></hr>
            </div>
            <div className='google-maps-contact-content'>
              <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BVICAM+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </center><br></br>
          <div >
            <center>
              <div className='max-w-6xl mx-auto my-3 flex flex-col' >
                <hr style={{ height: '3px', width: 'auto', color: '#333', }}></hr>
                <h2 className='text-3xl font-semibold text-slate-100 '>COORDINATOR TEAM</h2>
                <hr style={{ height: '40px', width: 'auto', color: '#333', }}></hr>
              </div>

              <div className="flex-container">
                <div className="container">
                  <img src="Sidak.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Sidak Ahuja</div>
                    <div className='font-sans text-xs text-white'>+91 96503 90954</div>

                    <a href='https://www.instagram.com/sidakahujaa/?igsh=M3U3Nmhwazd5eXlw&utm_source=qr'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="arjun.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">
                    <div className='font-serif text-lg text-white'>Arjun Alagh</div>
                    <div className='font-sans text-xs text-white'>+91 70119 73660</div>

                    <a href='https://www.instagram.com/arjunn_alagh/?igsh=eDd4M2hpMGp4d245&utm_source=qr'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>
              <div className="flex-container">
                <div className="container">
                  <img src="sanya.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">
                    <div className='font-serif text-lg text-white'>Sanya Wadhwa</div>
                    <div className='font-sans text-xs text-white'>+91 99104 72278</div>

                    <a href='https://www.linkedin.com/in/sanya-wadhwa-61a46b244'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="amit.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">
                    <div className='font-serif text-lg text-white'>Amit Raj</div>
                    <div className='font-sans text-xs text-white'>+91 85888 45969</div>

                    <a href='https://www.instagram.com/raj_amitttt/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>

              </div>
              <br />
              <div className="flex-container">

                <div className="container">
                  <img src="abhi.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">

                    <div className='font-serif text-base text-white'>Abhishek Kohli</div>
                    <div className='font-sans text-xs text-white'>+91 78768 64320</div>


                    <a href='https://www.instagram.com/abhiiii0.8/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="sk.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">

                    <div className='font-serif text-base text-white'>Shaunit Kataria</div>
                    <div className='font-sans text-xs text-white'>+91 98688 06797</div>

                    <a href='https://www.instagram.com/shaunit_k01/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>

              <div className="flex-container">

                <div className="container">
                  <img src="saurav.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Sourav</div>
                    <div className='font-sans text-xs text-white'>+91 98711 69532</div>

                    <a href='https://www.instagram.com/singhsourav050/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="kus.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-base text-white'>Kushagra Abbi</div>
                    <div className='font-sans text-xs text-white'>+91 70110 24221</div>

                    <a href='https://www.instagram.com/skushagra_abbi/?igsh=dGM4aGg3eGV5MHNt'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="flex-container">

                <div className="container">
                  <img src="ishaan.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Ishaan Verma</div>
                    <div className='font-sans text-xs text-white'>+91 93548 55625</div>

                    <a href='https://www.instagram.com/ishaanverma311?igsh=NGVxZ296YXljdWd3'>
                      <button>
                        <div className="text rounded-full">Connect</div>
                      </button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="yashbir.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Yashbir</div>
                    <div className='font-sans text-xs text-white'>+91 74289 38665</div>

                    <a href='https://www.instagram.com/_yashhuu._/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>

              <div className="flex-container">
                <div className="container">
                  <img src="jatin.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Jatin Yadav</div>
                    <div className='font-sans text-xs text-white'>+91 88269 16231</div>

                    <a href='https://www.instagram.com/jatinyadav2803/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="sahil.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">
                    <div className='font-serif text-lg text-white'>Gulshan</div>
                    <div className='font-sans text-xs text-white'>+91 89203 43259</div>

                    <a href='https://www.linkedin.com/in/gulshan-kumar-02a209180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex-container">
                <div className="container">
                  <img src="garima.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Garima</div>
                    <div className='font-sans text-xs text-white'>+91 97110 31155</div>

                    <a href='https://www.instagram.com/d_garima04?igsh=MXA1NmZ0emlhcmY1'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="ananya.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Ananya Arora</div>
                    <div className='font-sans text-xs text-white'>+91 96502 52130</div>

                    <a href='https://www.linkedin.com/in/ananya-arora-2a6269245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                
              </div>
              <div className='flex-container'>
                <div className="container">
                  <img src="navya.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Navya Wadhwa</div>
                    <div className='font-sans text-xs text-white'>+91 78277 76854</div>

                    <a href='https://www.linkedin.com/in/navya-wadhwa-234791239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex-container">

                <div className="container">
                  <img src="gunshita.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Gunshita Varun</div>
                    <div className='font-sans text-xs text-white'>+91 98737 60414</div>

                    <a href='https://www.instagram.com/gunshitaa?igsh=NWRta28xMXYwNnR5'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="shagun.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle">
                    <div className='font-serif text-lg text-white'>Shagun</div>
                    <div className='font-sans text-xs text-white'>+91 85957 28217</div>

                    <a href='https://www.linkedin.com/in/shagun1702/'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>

              </div>

              <div className="flex-container">
                <div className="container">
                  <img src="vanshika.jpeg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">
                    <div className='font-serif text-lg text-white'>Vanshika</div>
                    <div className='font-sans text-xs text-white'>+91 88027 56114</div>

                    <a href='https://www.linkedin.com/in/vanshikasharma01'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
                <div className="container">
                  <img src="anupam.jpg" alt="Avatar" className='image rounded-xl' />
                  <div className="middle ">
                    <div className='font-serif text-lg text-white'>Anupama</div>
                    <div className='font-sans text-xs text-white'>+91 86608 33848</div>

                    <a href='https://www.linkedin.com/in/anupamakumari2001'>
                      <button>
                        <div className="text rounded-full">Connect</div></button></a>
                  </div>
                </div>
              </div>

              <br />

            </center>
            <br></br>
            <br></br>
          </div>
        </Fade>
        <Fade>
          <Footer />
        </Fade>
      </div>
    </div>
  );
}

