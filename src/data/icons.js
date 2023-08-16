import heroIcon from '../assets/img/icon/home.svg';
import aboutIcon from '../assets/img/icon/user.svg';
import projectIcon from '../assets/img/icon/projects.svg';
import cvIcon from '../assets/img/icon/cv.svg';
import contactIcon from '../assets/img/icon/contact.svg';

const icons = [
  {
    id: 1,
    name: 'home',
    route: '/#hero',
    path: heroIcon,
  },
  {
    id: 2,
    name: 'about',
    route: '/#homeAbout',
    path: aboutIcon,
  },
  {
    id: 3,
    name: 'project',
    route: '/#project',
    path: projectIcon,
  },
  {
    id: 4,
    name: 'cv',
    route: '/cv',
    path: cvIcon,
  },
  {
    id: 5,
    name: 'contact',
    route: '/#contact',
    path: contactIcon,
  },
];

export default icons;
