import React, { useState } from 'react';

const ImagesCards = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=sph',
    'https://as1.ftcdn.net/v2/jpg/01/81/20/56/1000_F_181205685_q0X4IZ0Apjoo51UptPF8qM1wBme5XIVD.jpg',
    'https://img.freepik.com/free-photo/group-elephants-walking-dry-grass-wilderness_181624-15786.jpg?t=st=1716644339~exp=1716647939~hmac=be35939704fe49afa1eba102fc7cdf53758dfc88244b5e1a4016e187b66b0b1a&w=900',
    'https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?t=st=1716644317~exp=1716647917~hmac=4c791ae273a3c811408b78d4621e0456c940868e3f9d079c4b4f48946b596c0b&w=900'
  ];

  return (
    <div className='bg-gray-900 text-white p-5 w-[600px] h-full rotate-90 lg:rotate-0 lg:w-full'>
      <div className='flex justify-center w-full h-[560px] gap-3'>
        {images.map((src, index) => (
          <div
            key={index}
            className={`rounded-lg transition-all duration-300 ${
              hoveredImage === index ? 'w-[900px]' : 'w-[300px]'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={src}
              alt={`img${index + 1}`}
              className='w-full h-[560px] object-cover object-center rounded-[15px]'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCards;
