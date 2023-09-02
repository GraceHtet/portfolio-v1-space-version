import PropTypes from 'prop-types';
import Item from './Item'
import { navIcons } from '../data/icons';
import ufo from '../assets/img/icon/nav/ufo.svg';
import moon from '../assets/img/moon.png';
import { useState } from 'react';

const Navigation = ({section, type, className}) => {

  const [active, setActive] = useState(false);

  const handleClick = ()=>{
    setActive(!active);
  }

  return (
    <div className={`${className} p-abs ${active && 'toggle-active'}`}>
      <div className='burger-icon' onClick={handleClick}>
        <span className='line1 line'></span>
        <span className='line2 line'></span>
        <span className='line3 line'></span>
      </div>

      

      <img src={moon} className='nav-bg p-abs' alt="moon"/>
      <ul className='menu'>
        {(section !== 'hero') && (
        <li>
          <a href="/#hero" className='ufo-icon' onClick={handleClick}>
            <img src={ufo} alt="ufo"/>
          </a>
        </li>)}
        {(section === 'about' || type === 'page') ? (<Item name={navIcons[0].name} route={navIcons[0].route} path={navIcons[0].path} handleClick={handleClick}/>) : (section !== 'contact') && navIcons.map((icon)=>{
          return <Item key={icon.id} name={icon.name} route={icon.route} path={icon.path} handleClick={handleClick}/>
        })}
      </ul>

      
    </div>
  );
};

Navigation.propTypes = {
  section: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string
}

Navigation.defaultProps = {
  type: '',
  className: 'nav',
}

export default Navigation;
