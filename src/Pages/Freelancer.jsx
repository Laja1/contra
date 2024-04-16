import React from 'react';
import { motion } from 'framer-motion';
export default function Freelancer() {
  return (
    <div className='bg-[#14151f]'>
      <div className='max-w-[1246px] mx-auto flex justify-center items-center h-[850px] md:h-[1100px] lg:h-[800px] px-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
          <img src='babe.png' className='rounded-2xl w-full md:w-[80%] lg:w-full md:h-[70%] lg:h-full' alt='Freelancer' />
          <div className='text-white flex flex-col gap-5'>
          <motion.div initial={{ opacity: 0, x: -10, y: 30 }}  whileInView={{opacity:1, x:0,y:0}} transition={{duration:1}}>   <p className='text-4xl md:text-3xl lg:text-4xl font-semibold'>Are you <span className='playfair'>a freelancer?</span></p></motion.div>
          <motion.div initial={{ opacity: 0, x: -10, y: 30 }}  whileInView={{opacity:1, x:0,y:0}} transition={{duration:3, type:"spring"}}>    <p className='text-lg md:text-md'>Join the world’s best independents on the commission-free freelancer marketplace with $30MM+ in projects.</p></motion.div>
          <motion.div initial={{ opacity: 0, x: -10, y: 30 }}  whileInView={{opacity:1, x:0,y:0}} transition={{duration:4, type:"spring"}}> <p className='text-lg md:text-md'>Keep 100% of what you earn with 0% commission fees.</p></motion.div>
          <motion.div initial={{ opacity: 0, x: -10, y: 30 }}  whileInView={{opacity:1, x:0,y:0}} transition={{duration:5, type:"spring"}}> <div style={{backgroundColor: '#6a57e3  '}} className='w-[185px]  py-3 border-[#6a57e3] items-center flex shadow-xl  justify-center  border-[0.7px]   rounded-3xl'>
  <p className='text-white'>Sign Up as a freelancer</p>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, x: 0, y: 30 }}  whileInView={{opacity:1, x:0,y:0}} transition={{duration:5, type:"spring"}}>
<div className='absolute pl-[50%] pt-[40%] md:pt-[10%] md:pl-[50%] lg:pl-[30%]'><img src='stairs.png' className='lg:w-[303px] w-[150px] h-[180px] lg:h-[400px]'/></div></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
