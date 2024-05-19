import React from 'react';
import Logo from '../data/logo.png';

export const NaviBar = () => {
  return (
    <div className="container mx-auto px-10 flex">
        <img src={Logo} alt="logo" />
        <div className="flex ml-auto">
          <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <ul className="hidden lg:flex xl:text-base my-auto">
            <li className="Navi-text flex text-black pr-5"><a href="">Services</a></li>
            <li className="Navi-text text-black pr-5"><a href="">Technology</a></li>
            <li className="Navi-text text-black pr-5"><a href="">Lab</a></li>
            <li className="Navi-text text-black pr-5"><a href="">Case Studies</a></li>
            <li className="Navi-text text-black pr-5"><a href="">Blog</a></li>
            <li className="Navi-text text-black pr-5"><a href="">Events/Resources</a></li>
            <li className="Navi-text text-black pr-5"><a href="">FAQs</a></li>
            <li className="Navi-text text-black pr-5"><a href="">Contact</a></li>
            <li className="Navi-text text-black pr-5"><a href="">About Us</a></li>
            <li className="Navi-text text-black pr-5">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default NaviBar;
