import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from 'react-router';



const UpNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar>
      <NavbarBrand>
        <span className="whitespace-nowrap text-2xl font-semibold text-white" onClick={() => navigate('/')}>Aye Thazin Oo</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
          <NavbarLink className='!text-white !font-semibold text-xl' onClick={() => navigate('/')}>Home</NavbarLink>
          <NavbarLink className='!text-white !font-semibold text-xl' onClick={() => navigate('/about')}>About</NavbarLink>
          <NavbarLink className='!text-white !font-semibold text-xl' onClick={() => navigate('/skill')}>Skill</NavbarLink>
          <NavbarLink className='!text-white !font-semibold text-xl' onClick={() => navigate('/project')}>Projects</NavbarLink>
          <NavbarLink className='!text-white !font-semibold text-xl' onClick={() => navigate('/experience')}>Experience</NavbarLink>
          <NavbarLink className='!text-white !font-semibold text-xl' onClick={() => navigate('/contact')}>Contact</NavbarLink>
      </NavbarCollapse>
      
    </Navbar>
    </div>
  )
}

export default UpNav
