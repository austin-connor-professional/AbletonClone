import React, { useState } from 'react';
import '../../App.css';
import './callToAction.css';
import CallToActionImage from '../../assets/call-to-action-image.png';

const CallToAction = () => {
  const [selectedButton, setSelectedButton] = useState();

  return (
    <div className='call-to-action-container '>
      <div className='two-buttons '>
        <button
          onClick={() => setSelectedButton('About')}
          className={selectedButton === 'About' ? 'selected-button' : 'button'}
        >
          About
        </button>
        <button
          onClick={() => setSelectedButton('Jobs')}
          className={selectedButton === 'Jobs' ? 'selected-button' : 'button'}
        >
          Jobs
        </button>
      </div>
      <img
        className='call-to-action-image'
        src={CallToActionImage}
        alt='Ableton Logo'
      />
      <div className='call-to-action-text regular-text'>
        <p>
          We make <span class='blue-text'>Live</span>,{' '}
          <span class='blue-text'>Push</span> and{' '}
          <span class='blue-text'>Link</span> — unique software and hardware for
          music creation and performance. With these products, our community of
          users creates amazing things.
        </p>
        <p className='sub-text'>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
