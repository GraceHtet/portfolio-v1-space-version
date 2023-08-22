import PropTypes from "prop-types"
import Item from "./Item"
import Button from "./Button"
import { techIcons } from "../data/icons"

const Card = ({card}) => {

  return (
    <li className="card-item">
      <img src={card.img} alt={card.name} className="card-img"/>
      <h2 className="card-title">{card.name}</h2>
      <p>{card.description}</p>
      <ul className="icon-group">
      {techIcons.map((tech)=>{
        if(card.language.includes(tech.name)) {
          return (<Item key={crypto.randomUUID()} name={tech.name} route='#project' path={tech.path}/>)
        }
      })}
      </ul>
      <div className="btn-group">
        <Button name='Live' link={card.live} />
        <Button name='Source' link={card.source} />
      </div>
    </li>
  )
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Card
