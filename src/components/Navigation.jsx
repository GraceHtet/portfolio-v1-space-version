import PropTypes from 'prop-types';
import Item from './Item'
import { navIcons } from '../data/icons';
import ufo from '../assets/img/icon/nav/ufo.svg'

const Navigation = ({section}) => {

  return (
    <ul className="nav">
      {/* {(section !== 'hero') && (
      <li>
        <a href="#hero">
          <img src={ufo} alt="ufo" className="ufo_icon"/>
        </a>
      </li>)} */}
      {(section !== 'contact') && navIcons.map((icon)=>{
        return <Item key={icon.id} name={icon.name} route={icon.route} path={icon.path}/>
      })}
    </ul>
  );
};

Navigation.propTypes = {
  section: PropTypes.string.isRequired,
}

export default Navigation;
