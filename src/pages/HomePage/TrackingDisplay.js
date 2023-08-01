import React from 'react';
import './TrackingTemplate.css'; // Make sure to import the CSS file

function TrackingDisplay() {
  return (
    <div className="profile-container">
      <div className="right-column">
        {/* Content for the right column */}
        <h2 className='profile-name text-black'>Monthly Trackings</h2>
      </div>
    </div>
  );
}

export default TrackingDisplay;
