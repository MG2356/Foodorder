import React, { useEffect } from 'react';
import './Carousel.css';
import healthpic from './health.jpg'
import healthpic2 from './health2.jpg'
const Carousel = () => {
  useEffect(() => {
    const carousel = document.querySelector('[data-twe-carousel-init]');
    const items = carousel.querySelectorAll('[data-twe-carousel-item]');
    let currentIndex = 0;

    const updateCarousel = () => {
      items.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.remove('hidden');
          item.setAttribute('data-twe-carousel-active', '');
        } else {
          item.classList.add('hidden');
          item.removeAttribute('data-twe-carousel-active');
        }
      });
    };

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* First item */}
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          data-twe-carousel-active
        >
          <img
            src={healthpic}
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
        {/* Second item */}
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
        >
          <img
            src={healthpic2}
            className="block w-full"
            alt="Camera"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Carousel;
