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
  const [current, setCurrent] = useState(projects[0].name);
  const [idx, setIdx]= useState(0);
  const [leftDisable, setLeftDisable] = useState(true);
  const [rightDisable, setRightDisable] = useState(false);

  const handleClick = (e) => {
    projects.forEach((project)=>{
      if(project.name === e.target.innerText){
        setCards(project.pj);
        setCurrent(project.name);
        setIdx(0);
      }
    })
  }

  const handleForward = ()=> {
    if(idx >= cards.length - 1) return setRightDisable(true);

    setLeftDisable(false);
    setIdx(idx + 1);
  }

  const handleBackward = ()=> {
    if(idx <= 0) return setLeftDisable(true);
    
    setRightDisable(false);
    setIdx(idx - 1);
  }



  return (
    <section id="project" className="project">
      <Navigation section="project" type={type}/>
      <h1>Projects</h1>
        <div className="btn-group">
          {projects.map((pj) => {
            return (<Button key={pj.id} name={pj.name} link='/#project' active={current === pj.name} onClick={handleClick}/>)
          })}
        </div>
        <div className="card-container">
          <FontAwesomeIcon icon={faAngleLeft} className={`arrow left-arrow p-abs ${(leftDisable || idx === 0) && 'disable'}`} onClick={handleBackward}/>

          <Card card={cards[idx]}/>

          <FontAwesomeIcon icon={faAngleRight} className={`arrow right-arrow p-abs ${(rightDisable || idx === cards.length - 1) && 'disable'}`}  onClick={handleForward}/>
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
