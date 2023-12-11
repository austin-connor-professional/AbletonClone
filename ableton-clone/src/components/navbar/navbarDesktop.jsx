import React from 'react';
import '../../App.css';
import './navbar.css';

const NavbarDesktop = (props) => {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <img className='logo' src={props.AbletonLogo} alt='Ableton Logo' />
      </div>
      <div className='left-side-buttons'>
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
      </div>
      <div>
        <button className='try-live-for-free regular-text'>
          Try Live for free
        </button>
      </div>
      <div className='action-buttons'>
        {props.actionTitles.map((title, index) => {
          return (
            <button className='action-button' key={index}>
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarDesktop;
