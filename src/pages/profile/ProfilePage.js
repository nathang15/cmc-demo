import React from 'react';
import Header from '../../components/Header/Header';
import './profile.css';

function ProfilePage() {
  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="left-column col">
          {/* Content for the left column */}
          <div>
          <a className="nav-link text-center mb-3" href="/profile">
                <img
                  src="./312607686_2045512352315720_2284035725292858023_n.jpg" // Replace with the path of your first avatar image
                  alt="Avatar 1"
                  className="rounded-circle"
                  style={{ width: '120px', height: '120px' }}
                />
              </a>
            <p className='name text-center mb-2'>Monica Nguyen Hoang</p>
            <p className='name-2 text-center'>linh.hnt</p>
          </div>
        </div>
        <div className="right-column">
          {/* Content for the right column */}
          <h2 className='profile-name'>Profile</h2>
          <div style={{ marginBottom: '30px'}}></div> 
          <form>
            <div class="mb-3">
              <div className='form-header'>Name</div>
              <input type="text" class="form-control" id="" aria-describedby=""/>
            </div>
            <div class="mb-3">
              <div className='form-header'>Team</div>
              <input type="text" class="form-control" id="" aria-describedby=""/>
            </div>
            <div class="mb-3">
              <div className='form-header'>Email</div>
              <input type="email" class="form-control" id="" aria-describedby=""/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage