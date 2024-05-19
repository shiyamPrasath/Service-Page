import React, { useState } from 'react';
import img1 from '../data/1Mask group.png';
import img2 from '../data/2Mask group.png';
import img3 from '../data/3Mask group.png';
import img4 from '../data/4Mask group.png';
import img5 from '../data/5Mask group.png';
import img6 from '../data/6Mask group.png';
import UpArrow from '../data/uparrow.png';
import DownArrow from '../data/Downarrow.png';
import './Style.css'; // Import CSS file for component-specific styles

const DataTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(img1); // Set initial current image to img1

  const data = [
    {
      name: 'Neurodesign',
      paragraph: 'Neurodesign uses neuroscience to create more engaging visual content by analyzing how people perceive and react to design elements.',
      image: img1,
    },
    {
      name: 'Neurobrand Testing',
      paragraph: "Neurotesting enables precise assessment of packaging's competitive performance and forecasts impact",
      image: img2,
    },
    {
      name: 'Neuropackaging',
      paragraph: 'Neuropackaging uses EEG to objectively measure consumer brain responses to optimize packaging design.',
      image: img3,
    },
    {
      name: 'User Experience',
      paragraph: "Benefits of UX and Usability analysis using biometric and eye tracking tools include measuring participants' impulsive visual patterns.",
      image: img4,
    },
    {
      name: 'Product Testing',
      paragraph: 'NeuroX tests products using organoleptic techniques combined with biometric tools like BRI, EEGs, and face coding.',
      image: img5,
    },
    {
      name: 'Neuro Informed Development',
      paragraph: "Neuro Informed Development uses neuroscience to optimize product design for better user experiences.",
      image: img6,
    },
  ];

  const handleHover = (index) => {
    setHoveredIndex(index);
    setCurrentImage(data[index].image); // Set the current image to the hovered row's image
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hoveredIndex
    setCurrentImage(img1); // Reset current image to img1
  };

  return (
    <div className="overflow-x-auto px-10">
      <table className="min-w-full">
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-b-0"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
            >
              <td className="py-9 xl:text-3xl whitespace-nowrap">
                <span
                  style={{
                    color: hoveredIndex === index ? '#000000' : '#737373',
                  }}
                >
                  {item.name}
                </span>
              </td>
              <td className="py-9 px-10 xl:text-base max-w-lg break-words">{item.paragraph}</td>
              <td className="py-6 pl-4">
                {/* Display arrow icon conditionally based on hover state */}
                <img
                  src={hoveredIndex === index ? UpArrow : DownArrow}
                  alt="Arrow"
                  className={hoveredIndex === index ? 'arrow-icon rotated' : 'arrow-icon'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
