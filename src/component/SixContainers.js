import React, { useState } from 'react';

const Container = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex justify-center items-center h-20 border border-gray-300 rounded-md cursor-pointer transition-colors duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovered ? '#9CDAFE' : '#ffffff' }}
    >
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

const SixContainers = () => {
  return (
    <div className=" justify-center p-8 space-y-4">
      <Container text="Neurodesign" />
      <Container text="Neurobrand Testing" />
      <Container text="Neuropackaging" />
      <Container text="User Experience" />
      <Container text="Product Testing" />
      <Container text="Neuro Informed Development" />
    </div>
  );
};

export default SixContainers;
