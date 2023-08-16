import PropTypes from 'prop-types';
import NavItem from './NavItem'
import icons from '../data/icons'
import ufo from '../assets/img/icon/ufo.svg'

const Navigation = ({section}) => {

  return (
    <ul className="nav">
      {(section !== 'hero') && (
      <li>
        <a href="#hero">
          <img src={ufo} alt="ufo" className="ufo_icon"/>
        </a>
      </li>)}
      {(section !== 'contact') && icons.map((icon)=>{
        return <NavItem key={icon.id} name={icon.name} route={icon.route} path={icon.path}/>
      })}
    </ul>
  );
};

Navigation.propTypes = {
  section: PropTypes.string.isRequired,
}

export default Navigation;
