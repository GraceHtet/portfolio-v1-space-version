import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import github from '../assets/img/github.png'

const Button = ({name, link, handleClick}) => {
  return (
    <a href={link} className="btn" onClick={(e)=>{handleClick(e)}}>
      {name}
      {(name === 'Live') ? (<FontAwesomeIcon icon={faArrowUpRightFromSquare} />): (name === 'Source') ? <img src={github} alt='github'/> : ''}  
    </a>
  )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
}

Button.defaultProps = {
  handleClick: () => {},
}

export default Button
