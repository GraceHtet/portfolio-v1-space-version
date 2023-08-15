import PropTypes from 'prop-types';
import { useState } from 'react';

const NavItem = ({ name, route, path}) => {
  const [isHovering, setIsHovering] = useState(false);
  

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <a href={route} >
        {isHovering && <span className="hover-navitem">{name}</span>}
        <span className='navitem' style={{backgroundImage: `url(${path})`}}></span>
      </a>
    </li>
  )
}

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default NavItem
