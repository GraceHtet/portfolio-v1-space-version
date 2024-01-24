import Navigation from "../../../components/Navigation"
import saturn from "../../../assets/img/saturn.png"
import Button from "../../../components/Button"
import './HomeAbout.css';
import { useRef } from "react";
import { useInView } from "framer-motion";

const HomeAbout = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  const saturnStyle = {
    transform: isInView ? 'translate(0%)' : 'translate(50%,50%)',
    transition: 'all 1s ease-in-out 0.5s',
  }
  return (

    <section id="homeAbout" className="home-about" >
      <Navigation section='homeAbout' className='nav'/>
      <div className='container'>
        <h1 ref={ref}>About me</h1>
        <p className='intro'>
          Hello!<br/>
          I am <span className="name">Thiri Htet Htet Aung</span> (aka <span className="name">Grace</span>),<br/> <span className="highlight">React-Ruby On Rails</span> developer. <br/>
            I have always been passionate about creating and designing websites that are both visually appealing and user-friendly.
        </p>
        <Button name='See more...' link='/about'/>
      </div>
      <img src={saturn} className='saturn planet' style={saturnStyle} alt={saturn} />
    
    </section>
  )
}

export default HomeAbout
