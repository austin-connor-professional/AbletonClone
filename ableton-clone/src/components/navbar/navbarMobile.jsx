import React from 'react';
import '../../App.css';
import './navbar.css';

const NavbarMobile = (props) => {
  // Function to render the expanded navigation menu
  const renderNavExpanded = () => {
    const sideMenuStyle = props.isNavExpanded ? { transform: 'translateX(0)' } : {};
    return (
      <div className="tabOut" style={sideMenuStyle}>
        <div className="menuButtons">
         {props.navTitles.map((title, index) => {
          return (
            <button
              onClick={() => console.log({ title })}
              key={index}
              className='regular-text left-side-button'
            >
              {title}
            </button>
          );
        })}
        <button className=' regular-text'>
          Try Live for free
        </button>
        {props.actionTitles.map((title, index) => {
          return (
            <button className='action-button' key={index}>
              {title}
            </button>
          );
        })}
        <button className="closeButton" onClick={() => props.setIsNavExpanded(false)}>X</button>
      </div>
  </div>

    );
  };


  // Function to render the mobile view with the hamburger icon
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

  // Conditional rendering based on the state of the navigation menu
  return props.isNavExpanded ? renderNavExpanded() : mobileView();
};

export default NavbarMobile;
