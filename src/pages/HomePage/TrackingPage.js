import React, { useState } from 'react';
import TrackingTemplate from './TrackingTemplate';
import './TrackingPage.css'; 

function TrackingPage() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <div className="container-fluid h-100 bg-light">
      <div className="row h-100">
        <div className="col-2 p-0 bg-white custom-border-right-black">
          <div className="list-group rounded-0" id="list-tab" role="tablist">
            <div
              className={`list-group-item list-group-item-action ${
                selectedRow === 0 ? 'active' : ''
              }`}
              onClick={() => handleRowClick(0)}
            >
              <a href="#link1" className="text-dark text-decoration-none">Main Menu</a>
            </div>
            <div
              className={`list-group-item list-group-item-action ${
                selectedRow === 1 ? 'active' : ''
              }`}
              onClick={() => handleRowClick(1)}
            >
              <a href="#link2" className="text-dark text-decoration-none">General Tracking</a>
            </div>
            <div
              className={`list-group-item list-group-item-action ${
                selectedRow === 2 ? 'active' : ''
              }`}
              onClick={() => handleRowClick(2)}
            >
              <a href="#link3" className="text-dark text-decoration-none">My Tracking</a>
            </div>
          </div>
        </div>
        <div className="col-10 p-0">
          <div className="header">
            <div className="px-3"><p>Main Menu</p></div>
            <div className=""><p>General Tracking</p></div>
            <div className="px-3"><p>My Tracking</p></div>
          </div>
          <div className='mt-5 mb-5'><TrackingTemplate/></div>
        </div>
      </div>
    </div>
  );
}

export default TrackingPage;
