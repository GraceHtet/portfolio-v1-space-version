import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Navigation from "../../../components/Navigation"
import Button from "../../../components/Button"
import Card from "../../../components/Card"
import projects from "../../../data/projects"
import './Project.css';

const Project = () => {

  const [cards, setCards]= useState(projects[0].pj);

  const handleClick = (e) => {
    projects.forEach((project)=>{
      if(project.name === e.target.innerText){
        setCards(project.pj)
      }
    })
  }


  return (
    <section id="project">
      <Navigation section="project"/>
      <h1>Projects</h1>
        {projects.map((pj) => {
          return (<Button key={pj.id} name={pj.name} link='/#project' handleClick={handleClick}/>)
        })}
        <div className="card-container">
          <FontAwesomeIcon icon={faAngleLeft} className="arrow" />

          <ul className="cards">
          {cards.map((card)=>(<Card key={card.id} name={card.name} description={card.description} src={card.img} language={card.language}/> ))}
          </ul>

          <FontAwesomeIcon icon={faAngleRight} className="arrow"/>
        </div>
    </section>
  )
}

export default Project
