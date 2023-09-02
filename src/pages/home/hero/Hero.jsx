import Navigation from "../../../components/Navigation"
import moon from  "../../../assets/img/moon.png"
import mars from "../../../assets/img/mars.svg"
import style from './Hero.module.css'

const Hero = () => {
  
  
  return (
    <section id='hero' className={`grid-center ${style.hero}`}>
      <Navigation section="hero" className={`p-abs ${style.nav}`}/>
        <p className={`f-color h-font ${style['greet-text']}`}>
          Hey there,
          <br/>
          <span className={style.name}>I&apos;m Grace.</span>
          <br/>
          Turn your dream website into a stunning reality.
        </p>
      <img src={moon} className={`p-abs ${style['hero-moon']} planet`} alt='moon' />
      <img src={mars} className={`p-abs ${style['hero-mars']} planet`} alt='mars' />
    </section>
  )
}

export default Hero
