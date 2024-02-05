import React from 'react';
import Timeline from '../components/Timeline';

export default function Schedule() {
  return (
    
<div className='max-w-6xl mx-auto p-1 flex flex-col my-2' id='Schedule'>
            <center>
            <div className='max-w-7xl mx-auto my-3 flex flex-col'>
              <hr style={{ height: '3px',width:'auto', color: '#333',}}></hr>
              <h2 className='text-3xl font-semibold text-slate-100 '>SCHEDULE</h2>
              <hr style={{ height: '40px',width:'auto', color: '#333',}}></hr>
            </div>
            </center>

            <Timeline></Timeline>
            </div>
             );
            }
            