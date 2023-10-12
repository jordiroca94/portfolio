"use client"
import React, { useEffect, useState } from 'react'

const Header = () => {

  const [scroll, setScroll] = useState<number>(0)
  console.log(scroll," scrolling")
  const handleScroll = () => {
    const scrollY = window.scrollY
    setScroll(scrollY)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className={`z-50 ${scroll ? "bg-white text-black border-b border-gray":"bg-transparent text-black"} font-medium fixed w-full p-6 flex justify-end `}>
      <div className='flex gap-4 pr-10'>
        <li className='underlineAfterHover'>About Me</li>
        <li className='underlineAfterHover'>Skills</li>
        <li className='underlineAfterHover'>Experience</li>
        <li className='underlineAfterHover'>Projects</li>
        <li className='underlineAfterHover'>Contact</li>
      </div>
    </div>
  )
}

export default Header