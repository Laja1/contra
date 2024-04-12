import React from 'react';
import { motion } from 'framer-motion';

export default function BrowseTalent() {
  return (
    <div className="min-h-screen bg-[#fff] pt-20 flex flex-col items-center">
      <h1 className="text-center text-4xl lg:text-6xl font-bold mb-10">
        Browse talent{' '}
        <span className="font-light">for popular projects</span>
      </h1>
      <div className="grid items-center gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center">
      <div>  <motion.div  whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }} className="bg-[#45192F] h-[206px] w-[162px] lg:h-[320px] lg:w-[226px] pt-5 border-2 rounded-xl overflow-hidden">
          <h2 className="text-white text-xl font-light pl-5">Brand Name</h2>
          <motion.div
          
            initial={{ scale: 1 }}
            className="lg:pt-[73px] pt-[40px] flex justify-center"
          >
            <img
              src="item.png"
              alt="Item"
              className="rounded-xl lg:w-full lg:h-auto w-[80%] h-[80%] "
            />
          </motion.div>
          
        </motion.div>
        <p className='text-[15px] pt-3'>Work by Barbiana Liu</p></div>
    <div>   <motion.div  whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }} className="bg-[#FF5A5E] h-[206px] w-[162px] lg:h-[320px] lg:w-[226px] pt-5 border-2 rounded-xl overflow-hidden">
          <h2 className="text-white text-xl font-light pl-5">Web Development</h2>
          <motion.div
          
            initial={{ scale: 1 }}
            className="lg:pt-[73px] pt-[40px] flex justify-center"
          >
            <img
              src="item2.png"
              alt="Item"
              className="rounded-xl lg:w-full lg:h-auto w-[80%] h-[80%]"
            />
          </motion.div>
        </motion.div>
         <p className='text-[15px] pt-3'>Work by Corey Ward</p></div>
         <div>
        <motion.div  whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }} className="bg-[#6A57E3] h-[206px] w-[162px] lg:h-[320px] lg:w-[226px] pt-5 border-2 rounded-xl overflow-hidden">
          <h2 className="text-white text-xl font-light pl-5">Video Editing</h2>
          <motion.div
          
            initial={{ scale: 1 }}
            className="lg:pt-[73px] pt-[40px] flex justify-center"
          >
            <img
              src="item.png"
              alt="Item"
              className="rounded-xl lg:w-full lg:h-auto w-[80%] h-[80%]"
            />
          </motion.div>
        </motion.div>
         <p className='text-[15px] pt-3'>Work by Kayla Elorza</p></div>
         <div>
        <motion.div  whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }} className="bg-[#F0FB96] h-[206px] w-[162px] lg:h-[320px] lg:w-[226px] pt-5 border-2 rounded-xl overflow-hidden">
          <h2 className=" text-xl font-light pl-5">Social Content Creation</h2>
          <motion.div
          
            initial={{ scale: 1 }}
            className="lg:pt-[73px] pt-[40px] flex justify-center"
          >
            <img
              src="item4.png"
              alt="Item"
              className="rounded-xl lg:w-full lg:h-auto w-[80%] h-[80%]"
            />
          </motion.div>
        </motion.div> <p className='text-[15px] pt-3'>Work by Julia Spong</p></div>
         <div>
        <motion.div  whileHover={{ scale: 1.1 }}
            initial={{ scale: 1 }} className="bg-[#D6E9EB] h-[206px] w-[162px] lg:h-[320px] lg:w-[226px] pt-5 border-2 rounded-xl overflow-hidden">
          <h2 className=" text-xl font-light pl-5">Blog Writing</h2>
          <motion.div
          
            initial={{ scale: 1 }}
            className="lg:pt-[73px] pt-[40px] flex justify-center"
          >
            <img
              src="item5.png"
              alt="Item"
              className="rounded-xl lg:w-full lg:h-auto w-[80%] h-[80%]"
            />
          </motion.div>
        </motion.div> <p className='text-[15px] pt-3'>Work by Kira Gavalakis</p></div>
         
        
      </div>
    </div>
  );
}