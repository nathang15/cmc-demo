import React from 'react';
import './TrackingTemplate.css'; // Make sure to import the CSS file
import TrackingDisplay from './TrackingDisplay';

function TrackingTemplate() {
  return (
    <div className="container" style={{ height: '71.9vh', borderRadius: '10px', display: 'flex', paddingTop: '30px', paddingLeft: '30px' }}>
      <div className="">
        {/* Content for the right column */}
        <h2 className='profile-name text-black'>Monthly Trackings</h2>
        {/* <TrackingDisplay/> */}
      </div>
    </div>
  );
}

export default TrackingTemplate;
