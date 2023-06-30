import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ain1.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Learn</li>
          <li className='p-4'>Reference</li>
          <li className='p-4'>Tools</li>
          <li className='p-4'>Blog</li>
          <li className='p-4'>Community</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[#000300] md:hidden ease-in-out duration-500 z-20' : 'fixed left-[-100%] z-20'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Learn</li>
            <li className='p-4 border-b border-gray-600'>Reference</li>
            <li className='p-4 border-b border-gray-600'>Tools</li>
            <li className='p-4 border-b border-gray-600'>Blog</li>
            <li className='p-4 border-b border-gray-600'>Community</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar