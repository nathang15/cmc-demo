import React from 'react'
import './Header.css'; 
import { Link } from 'react-router-dom';
function Header() {
  const logo = "./Logo-corp.png";
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
        <img
            src={logo} // Adjust the image path as needed
            alt="Logo"
            style={{ width: '90px', height: '50px' }}
          />
          <a className="logo-name" href="/">linh.hnt</a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center ">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Monica Nguyen</Link>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/profile">
                <img
                  src="./312607686_2045512352315720_2284035725292858023_n.jpg" // Replace with the path of your first avatar image
                  alt="Avatar 1"
                  className="rounded-circle"
                  style={{ width: '60px', height: '60px' }}
                />
              </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
       <div style={{ borderBottom: '1px solid white' }}></div>
       </div>
      );
    };

export default Header