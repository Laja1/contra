import React,{useState} from 'react'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { RiTiktokFill } from "react-icons/ri";
import { FaXTwitter,FaPinterestP, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
export default function Navbar() {
const [showNav, setShowNav] = useState(false)

const handleNav=()=>{
    setShowNav(!showNav)
}
  return (
    <div><div className='flex-row  justify-between items-center  p-7 md:flex hidden'>
        <div  className='flex-row flex '>
      <div>
        <svg viewBox="0 0 148 28" xmlns="http://www.w3.org/2000/svg" className='w-[150px] pl-5 '><path d="M52.3 18.8c-1 3.6-4 6-8.3 6-5.5 0-9.3-3.9-9.3-9.8 0-6.2 4.5-10.7 11-10.7 2.5 0 4.3.6 5.3 1l.6 5.7h-.4c-2.3-3.6-4.3-5.9-6-5.9-2.3 0-4.1 2.8-4.1 7.3 0 5.7 3 7.9 6.4 7.9 1.9 0 3.6-.7 4.6-1.6h.2zM68 14.6C68 9 66.9 5 64 5s-4 3.9-4 9.5 1.2 9.4 4 9.4 4-3.8 4-9.4m-14.6 0C53.4 9 58.2 4.3 64 4.3s10.6 4.8 10.6 10.3c0 5.5-4.8 10.1-10.6 10.1s-10.6-4.6-10.6-10.1M84.8 24.2h-8.3V24c.6-2 1-3.5 1-6.9v-4.4c0-3-.6-4.6-2-6.3L83.6 4v4h.2c1-1.6 3.1-3.8 6.6-3.8 3.5 0 6 2.2 6 5.5v7.4c0 3.3.2 5 .9 6.9H89c.7-2 1-3.7 1-6.8v-7.1c0-1.7-.8-3-2.7-3-1.5 0-2.7 1-3.5 2v8c0 3.3.3 5 1 6.9zM100.5 19.3V5.8h-2.2v-.3l8-5.1h.5V5H121v.8h-14.2v13.3c0 2.4 1.3 3.1 2.8 3.1 1.4 0 2.3-.6 2.3-.6h.1c-.9 1.6-3 3.1-6.1 3.1-3.2 0-5.4-1.5-5.4-5.4"></path><path d="M113.9 24.2V24c.6-2 1-3.5 1-6.9v-4.4c0-3 .1-5.4-1.3-7v-.1L121 5v3.9c1.7-1.7 3.6-4.8 7-4.6l-.7 6.7h-.2a6.5 6.5 0 00-4.1-2.4c-.6 0-1.3.5-1.8 1.2v7.4c0 3.3.3 5 1 6.9h-8.3zM138.4 21v-6.8c-2.8.8-4.3 2.7-4.3 4.6 0 1.5.9 2.5 2.6 2.5.7 0 1.2-.1 1.7-.4m.1.8c-1.1 1.6-3 3-5.5 3-2.4 0-4.5-1.7-4.5-4.6 0-4.3 5.4-5.8 9.9-6.7v-2c0-2.4-1-3.5-3.8-3.5-1.5 0-3.4.3-5.1 1l-.2-.2c2-2.3 5-4.4 9.3-4.4 4.2 0 6.1 2.1 6.1 5.2v10.1c0 1 .5 1.8 1.7 1.8.5 0 1-.1 1.5-.5l.1.2c-.6 1.3-2 3.6-5.3 3.6-2.4 0-3.8-1.3-4.2-3"></path><path d="M105.5 5.7H121v-1h-15.5v1zM14.8 13h12.5c.2 0 .3 0 .3-.2v-.4c0-.1 0-.2-.2-.2-5.9-1.6-10.5-6.1-12-12L15 0h-.3c-.1 0-.2.1-.2.3v12.5c0 .1 0 .2.2.2zM14.8 27.6h.4l.2-.2c1.6-5.9 6.1-10.5 12-12l.2-.3v-.3c0-.1-.1-.3-.3-.3H14.8l-.2.3v12.5c0 .2 0 .3.2.3zM12.5 27.6h.3c.1 0 .2-.1.2-.3V14.8c0-.1 0-.3-.2-.3H.3c-.2 0-.3.2-.3.3v.4c0 .1 0 .2.2.2 5.9 1.5 10.5 6.1 12 12l.3.2zM.3 13h12.5c.1 0 .2 0 .2-.2V.3c0-.2 0-.3-.2-.3h-.4c-.1 0-.2 0-.2.2C10.6 6 6 10.7.2 12.2l-.2.3v.3c0 .1.1.2.3.2z"></path></svg>
      </div>
     <div className='flex-row flex gap-5 font-semibold pl-5'>
        <p>Platform</p>
          <p>Use Cases</p>
        <p>Resources</p>
          <p>Pricing</p>
     </div>

     </div>

          <div className='flex-row flex gap-5 items-center font-semibold pl-5'>
       <div className='px-5 py-3 border-[1px] border-[#000] md:hidden rounded-[25px]'> <p>Request a demo</p></div>
         <div className='px-4 py-3 rounded-[25px] border-[1px] bg-[#000]'> <p className='text-white'>Sign Up</p></div>
            <p>Login</p>
             
     </div></div>
    <div onClick={handleNav} className="block md:hidden">
      <div className='flex-row flex items-center w-[350px] mx-auto p-5 justify-between'>
       <div className='w-[28px]  h-[28px]'> <svg viewBox="0 0 28 28"  className='w-[28px]  h-[28px]' xmlns="http://www.w3.org/2000/svg" class="c-FnoFR"><path d="M14.81 13.04h12.53c.14 0 .26-.11.26-.25v-.39a.26.26 0 00-.2-.25A16.77 16.77 0 0115.37.2a.26.26 0 00-.25-.19h-.3a.26.26 0 00-.27.26v12.53c0 .14.12.25.26.25zM14.81 27.58h.38c.12 0 .22-.08.25-.2a16.77 16.77 0 0111.97-12.02c.1-.03.19-.14.19-.25v-.31a.26.26 0 00-.26-.26H14.81a.26.26 0 00-.26.26v12.52c0 .15.12.26.26.26zM12.47 27.58h.32c.14 0 .25-.11.25-.26V14.8a.26.26 0 00-.25-.26H.26a.26.26 0 00-.26.26v.38c0 .12.08.22.2.25a16.77 16.77 0 0112.03 11.96c.03.11.13.2.24.2zM.26 13.04h12.53c.14 0 .25-.11.25-.25V.26A.26.26 0 0012.8 0h-.39a.26.26 0 00-.25.2A16.77 16.77 0 01.2 12.22a.26.26 0 00-.19.24v.32c0 .14.12.25.26.25z"></path></svg>
    </div>
    <div className='flex-row flex gap-3'> <div className='px-5 py-3 border-[1px] border-[#000] rounded-[25px]'> <p>Get demo</p></div>
         <div className='px-4 py-3 rounded-[25px] border-[1px] bg-[#000]'> <p className='text-white'>Sign Up</p></div></div>
   <button onClick={handleNav}>{showNav? <MdClose />: <FiMenu/>}</button>
    </div>
    
    
          <div
            className={
              showNav
                ? "fixed top-45 w-full border-r-gray-900 h-full bg-[#fff] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
<p className='px-5 py-4  bg-[#f5f6f9] text-[#677084]'>Platform</p>
<hr />
<div className='flex-row bg-[#f5f6f9] px-5 py-4 flex items-center justify-between'><div className='flex-col'>
    <p className='text-[#677084] '>For hiring</p>
    <p className='text-[#677084] text-[14px]'>Platform</p>
</div>
<div>
<GoChevronRight size={30}/>
</div>
</div>

<div className='flex-row bg-[#f5f6f9] px-5 py-4 flex items-center justify-between'><div className='flex-col'>
    <p className=' text-[#4a5264]'>For freelancing</p>
    <p className=' text-[14px] text-[#677084]'>Power your independent workflow</p>
</div>
<div>
<GoChevronRight size={30}/>
</div>

</div>
<div className='flex-row   px-5 py-2 flex items-center justify-between'><div className='flex-col'>
    <p className=' '>Use cases</p>
    
</div>
<div>
<GoChevronRight size={30}/>
</div>

</div>
<div className='flex-row  px-5 py-2 flex items-center justify-between'><div className='flex-col'>
    <p className=' '>Resources</p>
    
</div>
<div>
<GoChevronRight size={30}/>
</div>

</div>
 <p className='px-5 py-2 '>Pricing</p>
  <p className='flex items-center justify-center py-5 '>Hire On Contra</p>
  <p className='flex items-center justify-center py-5   '>Login</p>
  <div className='flex items-center justify-center gap-5 pt-5   flex-row '>

    <RiTiktokFill size={27}/>
    <FaXTwitter size={27} />
    <FaInstagram size={27}/>
    <FaLinkedin size={27}/>
    <FaYoutube size={27}/>
    <FaPinterestP size={27}/>
  </div>
          </div>
          
    </div></div>
  )
}
