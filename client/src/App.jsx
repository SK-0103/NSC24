import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Schedule from './components/Schedule';
import scrollreveal from "scrollreveal";
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';


export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });
  

    sr.reveal(`
       #Team,
       #Schedule,
       #Events
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
    
  }, []);
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/sign-in' element={<SignIn />} />

        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}
