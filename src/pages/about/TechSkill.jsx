import Navigation from "../../components/Navigation"
import Item from "../../components/Item"
import { techIcons } from "../../data/icons"

const TechSkill = () => {
  return (
    <section id='techSkill'>
      <Navigation section='about'/>
      <h1>Technical skills</h1>
      <ul>
        {techIcons.map((icon)=>(<Item key={icon.id} name={icon.name} route='#techSkill' path={icon.path}/>))}
      </ul>
    </section>
  )
}

export default TechSkill
