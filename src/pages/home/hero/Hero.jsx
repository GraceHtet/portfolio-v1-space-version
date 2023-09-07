import Navigation from "../../../components/Navigation"
import moon from  "../../../assets/img/moon.png"
import mars from "../../../assets/img/mars.svg"
import style from './Hero.module.css'
import { useRef } from "react"
import { useInView } from "framer-motion"

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeIn = {
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out 0.5s"
  }

  
  const fadeRightDown = {
    transform: isInView ? "translate(0%)" : "translate(50%,-50%)",
    transition: "all 1s ease-in-out 0.5s"
  }

  
  const fadeUp = {
    transform: isInView ? "translate(-50%, 0%)" : "translate(-50%,50%)",
    transition: "all 1s ease-in-out 0.5s"
  }
  
  
  return (
    <section ref={ref} id='hero' className={`grid-center ${style.hero}`}>
      <Navigation section="hero" className={`p-abs ${style.nav}`}/>
        <p ref={ref} className={`f-color h-font ${style['greet-text']}`} style={fadeIn}>
          Hey there,
          <br/>
          <span className={style.name}>I&apos;m Grace.</span>
          <br/>
          Turn your dream website into a stunning reality.
        </p>
      <img src={moon} className={`p-abs ${style['hero-moon']} planet`} style={fadeUp} alt='moon' />
      <img src={mars} className={`p-abs ${style['hero-mars']} planet`} style={fadeRightDown} alt='mars' />
    </section>
  )
}

export default Hero
