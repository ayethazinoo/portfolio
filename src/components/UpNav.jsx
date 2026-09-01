import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from 'react-router';



const UpNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar>
      <NavbarBrand>
        <span className="whitespace-nowrap text-2xl font-semibold text-blue-400">Aye Thazin Oo</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
          <NavbarLink className='!text-blue-400 !font-semibold' onClick={() => navigate('/')}>Home</NavbarLink>
          <NavbarLink className='!text-blue-400 !font-semibold' onClick={() => navigate('/about')}>About</NavbarLink>
          <NavbarLink className='!text-blue-400 !font-semibold' onClick={() => navigate('/skill')}>Skill</NavbarLink>
          <NavbarLink className='!text-blue-400 !font-semibold' onClick={() => navigate('/project')}>Projects</NavbarLink>
          <NavbarLink className='!text-blue-400 !font-semibold' onClick={() => navigate('/experience')}>Experience</NavbarLink>
          <NavbarLink className='!text-blue-400 !font-semibold' onClick={() => navigate('/contact')}>Contact</NavbarLink>
      </NavbarCollapse>
      
    </Navbar>
    </div>
  )
}

export default UpNav
