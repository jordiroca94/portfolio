import React, { useState } from 'react'

const NavBar = () => {
    const [activeNav,setActiveNav] = useState("#")

  return (
    <nav className='flex text-white w-full gap-16 uppercase text-3xl justify-end py-8 px-20'>
        <div>
            <a href="#about" onClick={()=> setActiveNav("#about")} className={`${activeNav === "#about" ? "active" : ""}`} >
                <h5>About me</h5>
            </a>
        </div>
        <div>
            <a href="#webdev" onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}>      
                <h5>Web Developer</h5>
            </a>
        </div>
        <div>
            <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}>      
                <h5>MY PASSIONS</h5>
            </a>
        </div>
    </nav>
  )
}

export default NavBar