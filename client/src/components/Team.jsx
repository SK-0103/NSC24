import React from 'react';
import Teams from '../components/Teams';

const Team = () => {
    const teamImages = [
        './image1.jpg',
        './image2.jpg',
        './image3.jpg',
        './image4.jpg',
        './image5.jpg',
        './image6.jpg',
        './image7.jpg', 
      ];
  return (
    <div id='Team'>
    <center>
    <div className='max-w-6xl mx-auto my-3 flex flex-col'>
      <hr style={{ height: '3px',width:'auto', color: '#333',}}></hr>
      <h2 className='text-3xl font-semibold text-slate-100 '>COORDINATOR TEAM</h2>
      <hr style={{ height: '40px',width:'auto', color: '#333',}}></hr>
    </div>
    <Teams images={teamImages} />
    </center>
    <br></br>
    <br></br>
     </div>
  );
};

export default Team;
