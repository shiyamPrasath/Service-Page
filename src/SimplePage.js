// SimplePage.js

import React from 'react';

const SimplePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Simple Page</h1>
        <p className="text-gray-700 mb-4">
          This is a basic example of a React page styled with Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default SimplePage;
