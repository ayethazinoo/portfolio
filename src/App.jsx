import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import NotFoundPage from "./components/NotFoundPage";
import UpNav from "./components/UpNav";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";
import Experience from "./components/Experience";


const App = () => {
  return (
    <div>
      <UpNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Bottom/>
    </div>
  );
};

export default App;
