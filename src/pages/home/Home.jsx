import Hero from "./hero/Hero"
import HomeAbout from "./homeabout/HomeAbout"
import Project from "./project/Project"
import Contact from "./contact/Contact"
import { useState, useEffect } from "react"
import Loading from "../../components/Loading"

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadingScreenBeenShown = sessionStorage.getItem("loadingScreenShown");

    if (hasLoadingScreenBeenShown) {
      setLoading(false);
      
    } else {      
      setTimeout(() => {
        setLoading(false);
        
      sessionStorage.setItem("loadingScreenShown", "true");
      }, 4000);
    }
  },[]);
  
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
