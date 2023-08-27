import PropTypes from 'prop-types';
import Item from './Item'
import { navIcons } from '../data/icons';
import ufo from '../assets/img/icon/nav/ufo.svg'

const Navigation = ({section, type, className}) => {

  return (
    <ul className={className}>
      {(section !== 'hero') && (
      <li>
        <a href="/#hero" className='ufo-icon'>
          <img src={ufo} alt="ufo"/>
        </a>
      </li>)}
      {(section === 'about' || type === 'page') ? (<Item name={navIcons[0].name} route={navIcons[0].route} path={navIcons[0].path}/>) : (section !== 'contact') && navIcons.map((icon)=>{
        return <Item key={icon.id} name={icon.name} route={icon.route} path={icon.path}/>
      })}
    </ul>
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
