import PropTypes from 'prop-types';
import { useState } from 'react';

const Item = ({ name, route, path, handleClick}) => {
  const [isHovering, setIsHovering] = useState(false);  

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
      <a href={route}>
        
        <span className='item'>
        {isHovering && <span className="hover-item">{name}</span>}
          <img src={path} alt={name} width='20px' height='20px' className={name.toLowerCase()}/></span>
      </a>
    </li>
  )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    route: PropTypes.string,
    path: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}

Item.defaultProps = {
  route: '#',
  handleClick: ()=>{}
}

export default Item
