import React from 'react';
import Logo from '../data/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './Style.css';

const Footer = () => {
  return (
    <footer className='lg:flex w-full mt-12 lg:bg-black p-10 text-customGrey lg:mt-48'>
      {/* Left Column (Desktop) */}
      <div className='lg:w-1/2 p-4'>
        <img src={Logo} alt='logo' className='hidden lg:block' />
        <p className='text-sm xl:text-xl text-center lg:text-left'>
          NeuroX is revolutionizing the way businesses understand consumer behavior by merging cutting-edge neuroscience with marketing strategies. Our team of experts utilizes state-of-the-art technologies such as EEG, Facial Coding, and Eye Tracking to uncover deep insights into consumer preferences, emotions, and decision-making processes. With our own state-of-the-art lab based in London and a team of passionate professionals.
        </p>
        <div className='hidden mt-6 lg:flex text-white'>
          <div className='p-3 border rounded-3xl mr-3'><FaFacebookF/></div>
          <div className='p-3 border rounded-3xl mr-3'><FaTwitter /></div>
          <div className='p-3 border rounded-3xl mr-3'><FaLinkedinIn/></div>
          <div className='p-3 border rounded-3xl mr-3'><FaInstagram/></div>
        </div>
      </div>
      
      {/* Right Column (Desktop) */}
      <div className='lg:w-1/2 p-4 lg:text-customGrey text-white bg-black '>
        <div className='lg:hidden my-8'>CONTACT WITH US</div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Navigation Section */}
          <div>
            <h3 className='text-customBlue text-xl font-semibold mb-4'>Navigation</h3>
            <ul className='text-lg'>
              <li className='mb-2 py-3'>Service</li>
              <li className='mb-2 py-3'>Technology</li>
              <li className='mb-2 py-3'>Case Study</li>
              <li className='mb-2 py-3'>Resource</li>
              <li className='mb-2 py-3'>Contact</li>
            </ul>
          </div>
  
          {/* Licence Section */}
          <div>
            <h3 className='text-customBlue text-xl font-semibold mb-4'>Licence</h3>
            <ul className='text-lg'>
              <li className='mb-2 py-3'>Privacy Policy</li>
              <li className='mb-2 py-3'>Copyright</li>
              <li className='mb-2 py-3'>Email Address</li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div className='col-span-3 lg:col-auto '>
            <h3 className='text-customBlue text-base lg:text-lg font-semibold mb-4'>Contact</h3>
            <div className='flex  py-3'>
              <span className='text-customBlue mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              </span>
              <a href='tel:+44 7564 522241'>+44 7564 522241</a>
            </div>
            <div className='flex  items-center  py-3'>
              <span className='text-customBlue mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              </span>
              <a href='mailto:contact@neurox.co.uk'>contact@neurox.co.uk</a>
            </div>
            <div className='flex  items-center  py-3'>
              <span className='text-customBlue mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              </span>
              <p>20 Wenlock Road, London, N1 7GU</p>
            </div>
            <div className='lg:hidden flex mt-10 text-white'>
              <div className='p-3 border rounded-3xl mr-3'><FaFacebookF/></div>
              <div className='p-3 border rounded-3xl mr-3'><FaTwitter /></div>
              <div className='p-3 border rounded-3xl mr-3'><FaLinkedinIn/></div>
              <div className='p-3 border rounded-3xl '><FaInstagram/></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
