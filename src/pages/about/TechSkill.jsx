import Navigation from "../../components/Navigation"
import Item from "../../components/Item"
import { techIcons } from "../../data/icons"
import mars from "../../assets/img/mars2.svg"
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const TechSkill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeIn = {
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out 0.5s"
  }

  
  const fadeLeftDown = {
    transform: isInView ? "translate(0%)" : "translate(-50%,-50%)",
    transition: "all 1s ease-in-out 0.5s"
  }
  return (
    <section ref={ref} id='techSkill' className="techskill grid-center">
      <Navigation section='about'/>
      <h1 >Technical skills</h1>
      <ul className="tech-icons" style={fadeIn}>
        {techIcons.map((icon)=>(<Item key={icon.id} name={icon.name} route='#techSkill' path={icon.path}/>))}
      </ul>
      <img src={mars} className='about-mars p-abs planet' style={fadeLeftDown} alt='mars' />
    </section>
  )
}

export default TechSkill
