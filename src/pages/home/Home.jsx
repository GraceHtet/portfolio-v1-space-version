import Hero from "./hero/Hero"
import HomeAbout from "./homeabout/HomeAbout"
import Project from "./project/Project"
import Contact from "./contact/Contact"

const Home = () => {
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
