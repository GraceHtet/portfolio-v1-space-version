import PropTypes from 'prop-types';
import { useState } from 'react';

const Item = ({ name, route, path}) => {
  const [isHovering, setIsHovering] = useState(false);  

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <a href={route}>
        {isHovering && <span className="hover-item">{name}</span>}
        <span className='item'><img src={path} alt={name} width='20px' height='20px' className={name.toLowerCase()}></img></span>
      </a>
    </li>
  )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    route: PropTypes.string,
    path: PropTypes.string.isRequired,
}

Item.defaultProps = {
  route: '#',
}

export default Item
