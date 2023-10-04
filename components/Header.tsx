import React from 'react'

const Header = () => {

  return (
    <div className='border-b border-gray text-black p-6 flex justify-end '>
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