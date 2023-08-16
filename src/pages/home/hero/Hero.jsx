import Navigation from "../../../components/Navigation"
import moon from  "../../../assets/img/moon.svg"
import mars from "../../../assets/img/mars.svg"
import './Hero.css'

const Hero = () => {
  return (
    <section id='hero' className="hero">
      <Navigation section="hero"/>
        <p className="greet-text">
          Hey there,
          <br/>
          <span className="name">I&apos;m Grace.</span>
          <br/>
          I can transform your ideas into website.
        </p>
      <img src={moon} className='hero-moon' alt='moon' />
      <img src={mars} className='hero-mars' alt='mars' />
    </section>
  )
}

export default Hero
