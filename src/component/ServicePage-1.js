import React, { useState, useRef, useEffect } from 'react';
import ServiceVideo from '../data/About-us.mp4';
import img1 from '../data/1Mask group.png';
import img2 from '../data/2Mask group.png';
import img3 from '../data/3Mask group.png';
import img4 from '../data/4Mask group.png';
import img5 from '../data/5Mask group.png';
import Brand1 from '../data/Brands/Brand 0.png';
import Brand2 from '../data/Brands/pngwing 10.png';
import Brand3 from '../data/Brands/pngwing 2.png';
import Brand4 from '../data/Brands/pngwing 3.png';
import Brand5 from '../data/Brands/pngwing 4.png';
import Brand6 from '../data/Brands/pngwing 5.png';
import Brand7 from '../data/Brands/pngwing 6.png';
import Brand8 from '../data/Brands/pngwing 7.png';
import Brand9 from '../data/Brands/pngwing 8.png';
import Brand10 from '../data/Brands/pngwing 9.png';
import map from '../data/map.png';
import Location from '../data/Location.png';
import Animation from './Animation';
import Six from './SixContainers'
import NaviBar  from './NaviBar';
import Footer from './Footer';
import './Style.css';

const SimplePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const videoRef = useRef(null);
  const [activeImage, setActiveImage] = useState(img1);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const imagePaths = [Brand1,Brand2,Brand3,Brand4,Brand5,Brand6,Brand7,Brand8,Brand9,Brand10];

  const columnRef = useRef(null);

  const handleMouseEnter1 = (image) => {
    setActiveImage(image);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const imageItems = [
    { title: 'Neurodesign', description: 'Neurodesign uses neuroscience to create more engaging visual content by analyzing how people perceive and react to design elements.', image: img1 },
    { title: 'Neurobrand testing', description: 'Neurotesting enables precise assessment of packaging\'s competitive performance and forecasts impact', image: img2 },
    { title: 'Neuropackaging', description: 'Neuropackaging uses EEG to objectively measure consumer brain responses to optimize packaging design.', image: img3 },
    { title: 'User Experience', description: 'Benefits of UX and Usability analysis using biometric and eye tracking tools include measuring participants\' impulsive visual patterns.', image: img4 },
    { title: 'Product testing', description: 'NeuroX tests products using organoleptic techniques combined with biometric tools like BRI, EEGs, and face coding.', image: img5 },
  ];

  useEffect(() => {
    // Autoplay video on mount
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.error('Autoplay was prevented:', error);
        video.controls = true; // Fallback to showing controls
      });
    }

    // Start animation after a delay when the component mounts
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the column becomes visible
        if (entry.isIntersecting) {
          setIsAnimationStarted(true);
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the target is visible
    );

    if (columnRef.current) {
      observer.observe(columnRef.current);
    }

    return () => {
      if (columnRef.current) {
        observer.unobserve(columnRef.current);
      }
    };
  }, []); 


  return (
    <section className="bg-black-100 ">

      <div className="lg:hidden router container text-customGrey mt-2 p-10">
        Home {'>'} <span className="text-customBlue pl-1"> Services </span> 
      </div>

      <div className="container mt-28 p-10 mx-auto">
        <div className="xl:text-8xl  flex justify-center text-2xl">Services</div>
        <div className="mt-10 flex text-customGrey justify-center text-sm xl:text-lg xl:text-center xl:mx-20">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also 
        </div>
        <div className="container  mt-32 mx-auto video-container ">
          <video ref={videoRef} className="w-100% " autoPlay muted loop playsInline style={{ maxHeight: '80%', borderRadius: '20px'}}>
            <source src={ServiceVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='lg:hidden sm:block'><Six/></div>
      <div className='hidden lg:block'><Animation/></div>
      <div className='container p-10 mx-auto mt-20'>
        <div className='xl:mx-40 xl:text-4xl text-center font-semibold' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
        <span className='text-customBlue'> book. It has survived not only five centuries, but also</span>  </div>
        <div className='text-center xl:text-xl lg:mx-44 mt-20  text-customGrey'>Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also </div>
      </div>
      <div ref={columnRef} className='container mt-28 mx-auto p-10 relative'></div>
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        {/* Map Image */}
        <img src={map} alt='map' style={{ width: '100%', height: 'auto' }} />

        {/* Location Image Positioned Over the Map */}
        <img src={Location} alt='location' className='location1'
          style={{ position: 'absolute',width:'2.5%',top: '50%',left: '70%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location'  className={`location location2 ${isAnimationStarted ? 'animate-zoom-delayed-1' : ''}`}
          style={{position: 'absolute',width:'2.5%',top: '35%',left: '68%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location' className={`location location3 ${isAnimationStarted ? 'animate-zoom-delayed-4' : ''}`}
         style={{position: 'absolute',width:'1.5%',top: '70%',left: '35%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location' className={`location location4 ${isAnimationStarted ? 'animate-zoom-delayed-2' : ''}`}
          style={{position: 'absolute',width:'1.5%',top: '45%',left: '50%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location' className='location5'
          style={{position: 'absolute',width:'1.5%',top: '40.5%',left: '72%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location' className={`location location6 ${isAnimationStarted ? 'animate-zoom-delayed-3' : ''}`}
          style={{position: 'absolute',width:'1%',top: '35%',left: '65%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location' className='location7'
          style={{position: 'absolute',width:'1%',top: '36%',left: '74%',transform: 'translate(-50%, -50%)', }}/>
        <img src={Location} alt='location' className={`location location8 ${isAnimationStarted ? 'animate-zoom-delayed-5' : ''}`}
          style={{position: 'absolute',width:'1%',top: '60%',left: '53%',transform: 'translate(-50%, -50%)', }}/> 
      </div>


      <div className=' flex   mt-44'>
      {/* Use a wrapping div for the scrolling animation */}
      <marquee behavior="scroll" scrollamount="15"><div className='Partners_page_brands_container flex'>
          {imagePaths.map((imagePath, index) => (
            <img key={index} src={imagePath} alt={`Brand ${index + 1}`} className='Partners_page_img' />
          ))}
        </div></marquee>
    </div>

    <div className=' mt-48 flex flex-col'>
      <div className='flex justify-center text-5xl'>Ready to work with us?</div>
      <div className='flex justify-center text-center text-xl mt-11'><p>Unleash the Potential of Your Brand:  Let NeuroX Elevate Your Packaging,<br/> Ad Campaigns, and Brand Recognition</p></div>
      <div className='flex justify-center items-center mt-9'>
  <div className='w-64 h-12 flex justify-center items-center bg-customBlue text-white text-2xl rounded-full'>
    Get Started
    <span className='ml-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </span> 
  </div>
</div>

    </div>


    </section>
  );
};

export default SimplePage;
