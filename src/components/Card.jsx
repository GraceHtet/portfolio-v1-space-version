import PropTypes from "prop-types"
import Item from "./Item"
import Button from "./Button"
import { techIcons } from "../data/icons"

const Card = ({name, description, src, language}) => {

  return (
    <li className="card-item">
      <img src={src} alt={name} className="card-img"/>
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <ul className="icon-group">
      {techIcons.map((tech)=>{
        if(language.includes(tech.name)) {
          return (<Item key={crypto.randomUUID()} name={tech.name} path={tech.path}/>)
        }
      })}
      </ul>
      <div className="btn-group">
        <Button name='Live' link="#" />
        <Button name='Source' link="#" />
      </div>
    </li>
  )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    language: PropTypes.array.isRequired,
}

export default Card
