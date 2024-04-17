import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/3.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  // Use useEffect to start the automatic slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Transition every 3 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentSlide]); // Re-run effect when currentSlide changes

  return (
    <div className="slideshow-container border-t-4 border-orange-400" 
    data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <img className='h-[600px] w-full opacity-90' src={image} alt={`Slide ${index + 1}`} />
          <div className='flex absolute -mt-[600px] ml- items-center text-white p-5 h-[600px] w-full bg-gradient-to-r  from-blue-500 from-2% to-70% to-transparent'>
            <div className='lg:w-[1280px] mx-auto text-left '>
            <h1 className='text-6xl font-bold text- ' data-aos="flip-up">Wellcom to.. <br /> <span className='text-orange-600 text-6xl '> CRESTVIEW ESTATES</span> </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;