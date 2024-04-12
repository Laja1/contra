import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './Pages/Body'
import BrowseTalent from './Pages/BrowseTalent'
import Teams from './Pages/Teams'
import Hiring from './Pages/Hiring'
import Freelancer from './Pages/Freelancer'
import FreelancerHiring from './Pages/FreelancerHiring'
import GetStarted from './Pages/GetStarted'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-[#fff] h-full'><Header />
    <Navbar />
  <Body />
  <BrowseTalent />
  <Teams />

  <Hiring />
  <Freelancer />
  <FreelancerHiring />
  <GetStarted />
  <Footer />
    </div>

  )
}
