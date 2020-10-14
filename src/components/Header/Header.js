import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logos/Group 1329.png'
import './Header.css'
const Header = () => {
  return (
    <div>

      <div className="header d-flex">
                <img src={Logo} alt="" />
                <nav className="ml-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/donation">Donation</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blog">Blog</Link>


                    <button className = "btn btn-primary">Register</button>
                  

                </nav>
      </div>
      
    </div>
  );
};

export default Header;