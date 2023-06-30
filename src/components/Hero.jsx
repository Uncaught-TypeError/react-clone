import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] font-bold p-2'>Develop with our tools</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4'>Create Websites with Ease.</h1>
            <div className='flex justify-center items-center'>
                <p className='header-1 font-bold'>Fast, Productive way for</p>
                <Typed className='header-1 font-bold pl-2 md:pl-4' strings={['HTML', 'CSS', 'SASS', 'JS']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 pt-2'>The library for web and native user interfaces</p>
            <button className='green-btn bg-[#00df9a] text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero