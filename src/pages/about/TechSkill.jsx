import Navigation from "../../components/Navigation"
import Item from "../../components/Item"
import { techIcons } from "../../data/icons"
import mars from "../../assets/img/mars2.svg"

const TechSkill = () => {
  return (
    <section id='techSkill' className="techskill grid-center">
      <Navigation section='about'/>
      <h1>Technical skills</h1>
      <ul className="tech-icons">
        {techIcons.map((icon)=>(<Item key={icon.id} name={icon.name} route='#techSkill' path={icon.path}/>))}
      </ul>
      <img src={mars} className='about-mars p-abs planet' alt='mars' />
    </section>
  )
}

export default TechSkill
