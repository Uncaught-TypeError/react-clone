import React from 'react'
import images from '../constants/images';

const Content = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={images.laptopguy} alt='laptop_guy' className='w-[500px] md:w-full mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold'>Happy Coding</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Use tools provided from different websites</h1>
                <p>
                    Ain1 is a library. It has all the tools for creating a website together , so that users don't need to search them. To build an entire app with Ain1, we recommend a full-stack frameworks like <span className='text-[#00df9a] underline'>React.</span> or <span className='text-[#00df9a] underline'>Vite</span>.
                </p>
                <button className='green-btn text-[#00df9a] bg-black md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Content