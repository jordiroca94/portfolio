import React, { useState } from 'react'

const NavBar = () => {
    const [activeNav,setActiveNav] = useState("#")

  return (
    <nav className='flex text-white w-full gap-16 uppercase text-3xl justify-end py-8 px-20'>
        <div>
            <a href="#about" onClick={()=> setActiveNav("#about")} className={`${activeNav === "#about" ? "active" : ""} underlineHover `} >
                <h5>About me</h5>
            </a>
        </div>
        <div>
            <a href="#webdev" onClick={()=> setActiveNav("#webdev")} className={`${activeNav === "#webdev" ? "active" : ""} underlineHover`} >    
                <h5>Web Developer</h5>
            </a>
        </div>
        <div>
            <a href="#passions" onClick={()=> setActiveNav("#passions")} className={`${activeNav === "#passions" ? "active" : ""} underlineHover`} >  
                <h5>MY PASSIONS</h5>
            </a>
        </div>
    </nav>
  )
}

export default NavBar