import React from 'react'

export default function Freelancer() {
  return (
    <div className='bg-[#14151f]'>
      <div className='lg:w-[1246px] justify-center flex items-center h-[850px] md:h-[1100px]   lg:h-[800px]'>
        <div className='grid lg:grid-cols-2 flex  items-center justify-center  gap-5 px-10'>
<img src='babe.png' className='rounded-2xl lg:w-[full] lg:h-full md:w-[80%] md:h-[70%]'/>
<div className='text-white gap-5 flex-col flex'>
    <p className='text-[50px]'>Are you <span className='playfair'>a freelancer?</span></p>
    <p className='pt-5'>Join the world’s best independents on the commission-free freelancer marketplace with $30MM+ in projects.

    </p>
    <p >Keep 100% of what you earn with 0% commission fees.</p>
    <div style={{backgroundColor: '#6a57e3  '}} className='w-[185px] shadow-xl py-3 border-[#6a57e3] items-center flex shadow-xl  justify-center  border-[0.7px]   rounded-3xl'>
  <p className='text-white'>Sign Up as a freelancer</p>
</div>
<div className='absolute pl-[50%] pt-[40%] md:pt-[10%] md:pl-[50%] lg:pl-[30%]'><img src='stairs.png' className='lg:w-[303px] w-[150px] h-[180px] lg:h-[400px]'/></div>
</div>
        </div>
      </div>
    </div>
  )
}
