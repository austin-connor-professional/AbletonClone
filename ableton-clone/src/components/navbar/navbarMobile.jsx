import React from 'react';
import '../../App.css';
import './navbar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const NavbarMobile = (props) => {
  const renderNavExpanded = () => {
    return (
      <Popup
        open={props.isNavExpanded}
        onClose={() => props.setIsNavExpanded(false)}
        modal
      >
        {props.navTitles.map((title, index) => (
          <button
            key={index}
            onClick={() => console.log(title)}
            className='popup-button'
          >
            {title}
          </button>
        ))}
        {props.actionTitles.map((title, index) => (
          <button key={index} className='popup-button'>
            {title}
          </button>
        ))}
        <button
          onClick={() => props.setIsNavExpanded(false)}
          className='popup-button'
        >
          Close
        </button>
      </Popup>
    );
  };

  const mobileView = () => {
    return (
      <div className='mobile-nav'>
        <div
          className='mobile-nav-icon'
          onClick={() => props.setIsNavExpanded(!props.isNavExpanded)}
        >
          <div>&#9776;</div>
        </div>

        <div className='mobile-logo'>
          <img className='logo' src={props.AbletonLogo} alt='Ableton Logo' />
        </div>
      </div>
    );
  };

  return props.isNavExpanded ? renderNavExpanded() : mobileView();
};

export default NavbarMobile;
