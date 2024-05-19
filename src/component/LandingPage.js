import React from 'react';
import NaviBar from './NaviBar';
import BgHome from '../data/video.mp4';
import './Style.css';

const LandingPage = () => {
  return (
    <section className="absolute top-0 left-0 w-full h-full object-cover z-[-1] ">
        <video
        autoPlay
        loop
        muted
      >
        <source src={BgHome} type="video/mp4" />
      </video>
    </section>
  )
}

export default LandingPage;