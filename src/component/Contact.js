import React from 'react';
import './Style.css';
import ContactBg from '../data/ContactBg.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='mt-44 px-10 flex flex-col items-center justify-center'>
      <div className='lg:text-8xl text-3xl text-center lg:px-64 mb-8'>
        Hi there! Can't find what you need?
      </div>
      <div className='text-center mt-8 text-customGrey'>
        Please get in touch and our support team will answer all your questions.
      </div>
      <div className='flex text-customGrey items-center'>
        You can send a message to{' '}
        <span className='ml-1 text-black font-semibold'>
          <a href='mailto:contact@neurox.co.uk'>neurox.co.uk</a>
        </span>
      </div>
      <section className='relative w-full border mt-16 border-white  shadow-lg p-2 flex'>
        {/* Left Part (One-third width) */}
        <div className='w-1/3 text-white px-10 bg-black rounded-lg whitespace-nowrap'>
          <div className='text-4xl pt-10 font-semibold mt-10'>Contact Information</div>
          <div className='text-lg mt-2.5'>Say something to start a live chat!</div>
          <div className='flex mt-20 py-3'>
            <span className='text-customBlue mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            </span>
            <div>
              <a href='tel:+44 7564 522241'>+44 7564 522241</a> <br/>
              <a href='tel:+44 7564 522241'>+44 7503 672001</a>
            </div>
          </div>
          <div className='flex items-center mt-5 py-3'>
            <span className='text-customBlue mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            </span>
            <a href='mailto:contact@neurox.co.uk'>contact@neurox.co.uk</a>
          </div>
          <div className='flex items-center mt-5 py-3'>
            <span className='text-customBlue mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            </span>
            <p>20 Wenlock Road, London, N1 7GU</p>
          </div>
          <div className='flex mt-14 pb-10 text-white'>
            <div className='p-3 border rounded-3xl mr-3'><FaFacebookF/></div>
            <div className='p-3 border rounded-3xl mr-3'><FaTwitter /></div>
            <div className='p-3 border rounded-3xl mr-3'><FaLinkedinIn/></div>
            <div className='p-3 border rounded-3xl mr-3'><FaInstagram/></div>
          </div>
        </div>
        {/* Right Part (Two-thirds width) */}
        <div className='w-2/3 p-4'>
          <form>
            <div className='grid grid-cols-2 gap-x-4'>
              <div className='flex flex-col'>
                <label htmlFor='FirstName'>First Name</label>
                <input type='text' required className='border-b border-black'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='LastName'>Last Name</label>
                <input type='text' className='border-b border-black' required />
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
