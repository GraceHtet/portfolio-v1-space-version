import { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Navigation from "../../../components/Navigation"
import Button from "../../../components/Button"
import Card from "../../../components/Card"
import projects from "../../../data/projects"
import './Project.css';

const Project = ({type}) => {

  const [cards, setCards]= useState(projects[0].pj);

  const handleClick = (e) => {
    projects.forEach((project)=>{
      if(project.name === e.target.innerText){
        setCards(project.pj);
      }
    })
  }


  return (
    <section id="project" className="project">
      <Navigation section="project" type={type}/>
      <h1>Projects</h1>
        <div className="btn-group">
          {projects.map((pj) => {
            return (<Button key={pj.id} name={pj.name} link='/#project' onClick={handleClick}/>)
          })}
        </div>
        <div className="card-container">
          <FontAwesomeIcon icon={faAngleLeft} className="arrow left-arrow p-abs" />

          <ul className="cards">
          {cards.map((card)=>(<Card key={card.id} card={card}/> ))}
          </ul>

          <FontAwesomeIcon icon={faAngleRight} className="arrow right-arrow p-abs "/>
        </div>
    </section>
  )
}

Project.propTypes = {
  type: PropTypes.string
}

Project.defaultProps = {
  type: '',
}

export default Project
