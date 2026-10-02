 import React from 'react'
import Skill from "./Skill";
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Experience from './Experience';

const Home = () => {
  return (
    <div>  
      <About/>      
      <Skill/>
      <Project/>
      <Experience/>
      <Contact/>     
    </div>
  )
}

export default Home
