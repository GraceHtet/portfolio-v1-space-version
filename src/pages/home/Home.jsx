import Hero from "./hero/Hero"
import HomeAbout from "./homeabout/HomeAbout"
import Project from "./project/Project"
import Contact from "./contact/Contact"
import { useState,useEffect } from "react"

const Home = () => {

  // const [top , setTop]= useState(0);

  // const handleScroll = () => {
  //   setTop(window.scrollY);
  // }

  // useEffect(() => {

  //   document.addEventListener('aos:in', ({ detail }) => {
  //     console.log('animated in', detail);
  //   });
    
  //   document.addEventListener('aos:out', ({ detail }) => {
  //     console.log('animated out', detail);
  //   });
  // },[]);
  return (
    <div>
        <Hero/>
        <HomeAbout />
        <Project />
        <Contact />
    </div>
  )
}

export default Home
