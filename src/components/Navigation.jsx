import NavItem from './NavItem'
import icons from '../data/icons'

const Navigation = () => {

  return (
    <ul className="nav">
      {icons.map((icon)=>{
        return <NavItem key={icon.id} name={icon.name} route={icon.route} path={icon.path}/>
      })}
    </ul>
  );
};

export default Navigation;
