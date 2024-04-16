import React from 'react'
import {motion} from 'framer-motion'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Body() {
  return (
    <div className='bg-[#fff]'>
          <style>{`
      .bg-gradient-text {
        background: linear-gradient(117.09deg, rgb(34, 40, 52) 8.29%, rgb(106, 87, 227) 67.55%, rgb(205, 116, 221) 93.23%);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    `}</style>
      <div className='flex-row flex items-center justify-center gap-3 py-5 lg:py-0'><p className=' bg-gradient-text text-[10px] md:text-[15px] lg:text-[20px]'>FOR HIRING  </p>
      <div className="form-control ">
  <label className="label cursor-pointer ">
   
    <input type="checkbox" className="toggle bg-black" checked />
  </label>
</div><p className='ext-[#677084] text-[10px] md:text-[15px] lg:text-[20px]'>FOR FREELANCERS</p>
    </div>
    <div className='items-center flex justify-center  px-10 pt-3 lg:pt-0'>
  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}> <p className=' text-center text-[#000] font-bold text-[30px] lg:w-[680px] lg:text-[85px]'>What do you need help with?</p></motion.div> 
 </div>
 <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}><div className='items-center flex justify-center  px-10'>
    <p className=' text-center text-[20px] font-thin lg:w-full md:w-full w-[250px] lg:text-[30px]'>Discover the world's best experts for your next project</p>
      </div></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
<div className='items-center flex pt-3 justify-center'>
<div
  className="w-[312px] lg:w-[750px] lg:h-[70px] h-[60px] shadow-2xl rounded-xl flex items-center justify-between px-4"
  style={{
    borderRadius: '40px',
    padding: '2px',
    boxShadow: '0 5 5 #e5973c , #6a57e3, #6a57e3',
    background: 'linear-gradient(117.09deg, #e5973c 8.29%, #6a57e3 67.55%, #cd74dd 93.23%)',
  }}
>
  <div className="bg-white w-full h-full rounded-[40px] flex items-center justify-between px-4">
   <div className='flex-row flex gap-3  items-center'><IoSearchOutline color='#677084'/>
    <p className="text-sm hidden text-[#677084] lg:block">Try band design, blog articles, or Framer website...</p>
     <p className="text-sm block text-[#677084] lg:hidden">Search.</p></div>
    <button className="bg-[#6A57E3] text-white lg:px-6 lg:py-3 px-3 py-2 rounded-[30px]">Get started</button>
  </div>
</div>
</div></motion.div>
<div className='justify-center  mx-auto items-center  flex pt-5'>
<div className='flex-row  items-center  mx-auto gap-3 justify-center lg:w-[580px]  flex flex-wrap lg:justify-between'>
    <p className='text-sm'>POPULAR</p>
    <div className='px-3 py-2 bg-[#fff] border-[0.7px]  border-[#00000080] rounded-3xl'><p className='text-sm'>Web Designer</p></div>

<div className='px-3 py-2 bg-[#fff] border-[0.7px]  border-[#00000080] rounded-3xl'><p className='text-sm'>Content Creator</p></div>

<div className='px-3 py-2 bg-[#fff] border-[0.7px]  border-[#00000080] rounded-3xl'><p className='text-sm'>Framer Developer</p></div>
<div className='px-3 py-2 bg-[#fff] border-[0.7px]  border-[#00000080] rounded-3xl'><p className='text-sm'>Canva</p></div>

</div>
</div>
<div className='justify-center  mx-auto px-3 items-center  flex pt-5'>
  <p className='text-[11px] text-[#000] pb-4'>HIRE TOP EXPERTS IN</p></div>
  <div className='items-center lg:flex-col justify-center gap-3 flex  '>
   <div className='flex-col flex lg:flex-row items-center justify-center gap-4'>
     <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/bb29f0dd891b07ab85f48c95cb98c9a921be0815-244x80.png?w=576&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
      <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/8fbd91af0725bc1b2655f5385ff614c146d70203-238x70.png?w=576&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>


      <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/ff1dfec7de943ffa946396042a1b30f10dc0b87b-983x305.png?w=1440&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
<div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/6bf8933982cbcc99b111cda79092684812684590-275x50.svg?w=576&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
      <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/46f250c96604d0fb233dcc41c3c2168f9a4aca61-1344x350.png?w=1440&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
    </div>
    
    <div className='flex-col flex lg:flex-row items-center justify-center gap-4'> 
    <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/3ed72f97ad172f7776db913243b456de7abfcd28-202x67.png?w=576&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
      <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/b21f5e5d48095d7022a042bd47b72d9d2efdfcaa-262x44.png?w=576&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>


      <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/413258fe6be02bf5312168c84ca58fec76d22f94-230x62.png?w=576&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
<div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/ca0f919c5d3fcae32946c327a478e662bf88e3f7-476x128.png?w=992&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
      <div className='lg:w-[230px] w-[170px] h-[60px] border-[#000]  border-[0.5px] rounded-xl bg-white lg:h-[80px] items-center justify-between px-2 flex'>
      <img className='lg:w-20 w-16 h-6 lg:h-8 ' src='https://cdn.sanity.io/images/irqt9az8/production/39ffb9e03f25d7d0ad82f4bc009c90fe6db6d250-400x158.png?w=992&q=75&auto=format'/> <motion.div  whileHover={{ scale:1.2 }} initial={{scale:1}}><IoIosArrowRoundForward size={30} color='#000'/></motion.div></div>
    </div></div>

    
    </div>
  )
}
