import React from 'react';
import { Fade } from "react-awesome-reveal";

const Timeline = () => {
  const events = [
    {
      title: 'Fandango |Group Dance|',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Volleyball',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    // Add more events as needed
  ];
  const events1 = [
    {
      title: 'CodeFest',
      description: 'Prelims : 9am - 1 pm         Finals: 2 pm onwards',
      
    },
    {
      title: 'Rang Manch |Nukkad Natak|',
      description: '09:00 AM onwards... Reporting: 08:30 AM',
    },
    {
      title: 'Orphic VOL.1 |Solo Dance|',
      description: '02:00 PM onwards... Reporting: 1:00 PM',
    },
    {
      title: 'Shark Tank',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Volleyball',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Tug of War',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Tractate',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Poster Making',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Photography',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Flameless Cooking',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'RJ Hunt',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    {
      title: 'Reel Making',
      description: '11 am onwards... Reporting: 10:00 AM',
    },
    // Add more events as needed
  ];

  return (
    <div>
        <br></br>
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center">
      <h1 className='text-blue-500 font-bold text-xl lg:text-5xl self-center'>DAY 1</h1>
      <br></br>
        {events.map((event, index) => (
          <Fade direction='left' key={index} cascade>
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
              <div className="w-8 h-8 bg-blue-400 rounded-full mx-4"></div>
              <div className="bg-white p-4 rounded-md shadow-md max-w-md w-56">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
    <br></br>
    <br></br>
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center">
      <h1 className='text-blue-500 font-bold text-xl lg:text-5xl self-center'>DAY 2</h1>
      <br></br>
        {events1.map((event, index) => (
          <Fade direction='right' key={index} cascade>
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
              <div className="w-8 h-8 bg-blue-400 rounded-full mx-4"></div>
              <div className="bg-white p-4 rounded-md shadow-md max-w-md w-56">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Timeline;


