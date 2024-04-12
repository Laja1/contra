import React, { useEffect, useRef, useState } from 'react';

const data = [
    {
        image: 'https://cdn.sanity.io/images/irqt9az8/production/637e4355474db678235b7cc92628af86df24bf24-764x454.jpg?w=1440&q=75&auto=format',
        title: 'Contra for Clients',
        description: 'With Contra, you can discover and hire top-notch talent, manage payments, contracts, and projects, and work the way you want.',
        link: '#'
      },
      {
        image: 'https://cdn.sanity.io/images/irqt9az8/production/5b90023f67b9770fe7ce0a387e468e045de86639-764x455.jpg?w=1440&q=75&auto=format',
        title: 'Top Independents on Contra',
        description: 'Everything you need to know about our Top Independents!',
        link: '#'
      },
      {
        image: 'https://cdn.sanity.io/images/irqt9az8/production/8d0f2c4d3b2ee0f117bc6f90e6e4ac452c57bb61-764x455.jpg?w=1440&q=75&auto=format',
        title: 'Guide to Flexible Projects',
        description: 'This guide will go over a few different ways you can utilize tools on Contra to kickstart your Paid Projects!',
        link: '#'
      },
      {
        image: 'https://cdn.sanity.io/images/irqt9az8/production/c3486970acaa83857de4960667641403dfede842-764x455.jpg?w=1440&q=75&auto=format',
        title: 'Guide to Milestones',
        description: 'In this article, we’ll go over how you can use Milestone Projects the next time you work on Contra!',
        link: '#'
      },
      
];


export default function GetStarted() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
  
    const handleScroll = (direction) => {
      const container = carouselRef.current;
      const containerWidth = container.offsetWidth;
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
  
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
  
      setCurrentIndex((prevIndex) => {
        const maxIndex = container.scrollWidth - container.offsetWidth;
        const newIndex = prevIndex + scrollAmount;
        return Math.max(0, Math.min(newIndex, maxIndex));
      });
    };
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          handleScroll('left');
        } else if (e.key === 'ArrowRight') {
          handleScroll('right');
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return (
      <div className='bg-[#fff] flex flex-col items-center justify-center min-h-screen'>
        <div className='px-5 item-center flex-row pb-10 flex w-full max-w-[1200px] justify-between mx-auto'>
          <p className='text-black text-3xl md:text-5xl'>
            How to get started on <span className='text-3xl md:text-5xl text-black playfair'>contra</span>
          </p>
  
          <div className='flex-row flex gap-2'>
            <button className='' onClick={() => handleScroll('left')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
              </svg>
            </button>
  
            <button className=' duration-300' onClick={() => handleScroll('right')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
              </svg>
            </button>
          </div>
        </div>
  
        <div
          className='carousel-container flex overflow-x-auto py-4 mx-auto w-full max-w-[1200px]'
          ref={carouselRef}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-72 md:w-80 lg:w-96 mr-4 last:mr-0 overflow-hidden'
            >
              <div
                style={{
                  backgroundImage: `url('${item.image}')`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className='mb-3 rounded-2xl'
              ></div>
              <div className='p-4'>
                <p className='text-lg md:text-xl font-semibold mb-2'>{item.title}</p>
                <p className='text-sm md:text-base text-gray-700 mb-4'>{item.description}</p>
                <div className='bg-[#fff] border-2 border-[#000] items-center flex justify-center w-[160px] rounded-3xl py-2'>
                  <p>Read more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }