import Hero from "./hero/Hero"
import HomeAbout from "./homeabout/HomeAbout"
import Project from "./project/Project"
import Contact from "./contact/Contact"
import { useState, useEffect } from "react"
import Loading from "../../components/Loading"

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  },[]);

  console.log(loading);
  
  return (
    <>
  {loading ? <Loading/> :(<div>
    <Hero/>
    <HomeAbout />
    <Project />
    <Contact />
</div>)}
</>
  )
}

export default Home
