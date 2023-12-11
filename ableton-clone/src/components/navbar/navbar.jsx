import React, { useState, useEffect } from 'react';
import '../../App.css';
import './navbar.css';
import AbletonLogo from '../../assets/Ableton-Logo.png';
import 'reactjs-popup/dist/index.css';
import NavbarDesktop from './navbarDesktop';
import NavbarMobile from './navbarMobile';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const navTitles = ['Live', 'Push', 'Link', 'Shop', 'Packs', 'More +'];
  const actionTitles = ['Account', 'Log out'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 788);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobileView ? (
        <NavbarMobile
          AbletonLogo={AbletonLogo}
          navTitles={navTitles}
          actionTitles={actionTitles}
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
        />
      ) : (
        <NavbarDesktop
          AbletonLogo={AbletonLogo}
          navTitles={navTitles}
          actionTitles={actionTitles}
        />
      )}
    </div>
  );
};

export default Navbar;
