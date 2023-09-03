import heroIcon from '../assets/img/icon/nav/home.svg';
import aboutIcon from '../assets/img/icon/nav/user.svg';
import projectIcon from '../assets/img/icon/nav/projects.svg';
import cvIcon from '../assets/img/icon/nav/cv.svg';
import contactIcon from '../assets/img/icon/nav/contact.svg';
import html from '../assets/img/icon/tech/Html.png';
import css from '../assets/img/icon/tech/CSS.png';
import js from '../assets/img/icon/tech/JavaScript.png';
import react from '../assets/img/icon/tech/React.png';
import postgre from '../assets/img/icon/tech/PostgreSQL.png';
import ruby from '../assets/img/icon/tech/Ruby.png';
import rails from '../assets/img/icon/tech/Rails.png';
import jest from '../assets/img/icon/tech/jest.png';
import rspec from '../assets/img/icon/tech/rspec.png';
import github from '../assets/img/icon/tech/GitHub.png';
import figma from '../assets/img/icon/tech/Figma.png';
import heroku from '../assets/img/icon/tech/Rails.png';
import postman from '../assets/img/icon/tech/Postman.png';
import render from '../assets/img/icon/tech/render.png';
import netlify from '../assets/img/icon/tech/netlify.png';
import webpack from '../assets/img/icon/tech/Webpack.png';
import linkedin from '../assets/img/icon/contact/LinkedIn.png';
import twitter from '../assets/img/icon/contact/TwitterX.png';

const navIcons = [
  {
    id: 1,
    name: 'home',
    route: '/portfolio-v1-space-version/#hero',
    path: heroIcon,
  },
  {
    id: 2,
    name: 'about',
    route: '/portfolio-v1-space-version/#homeAbout',
    path: aboutIcon,
  },
  {
    id: 3,
    name: 'project',
    route: '/portfolio-v1-space-version/#project',
    path: projectIcon,
  },
  {
    id: 4,
    name: 'cv',
    route: '/portfolio-v1-space-version/cv',
    path: cvIcon,
  },
  {
    id: 5,
    name: 'contact',
    route: '/portfolio-v1-space-version/#contact',
    path: contactIcon,
  },
];

const techIcons = [
  {
    id: 1,
    name: 'HTML',
    path: html,
  },
  {
    id: 2,
    name: 'CSS',
    path: css,
  },
  {
    id: 3,
    name: 'JavaScript',
    path: js,
  },
  {
    id: 4,
    name: 'React',
    path: react,
  },
  {
    id: 5,
    name: 'PostgreSQL',
    path: postgre,
  },
  {
    id: 6,
    name: 'Ruby',
    path: ruby,
  },
  {
    id: 7,
    name: 'Rails',
    path: rails,
  },
  {
    id: 8,
    name: 'Jest',
    path: jest,
  },
  {
    id: 9,
    name: 'Rspec',
    path: rspec,
  },
  {
    id: 10,
    name: 'GitHub',
    path: github,
  },
  {
    id: 11,
    name: 'Figma',
    path: figma,
  },
  {
    id: 12,
    name: 'Heroku',
    path: heroku,
  },
  {
    id: 13,
    name: 'Netlify',
    path: netlify,
  },
  {
    id: 14,
    name: 'Render',
    path: render,
  },
  {
    id: 15,
    name: 'Webpack',
    path: webpack,
  },
  {
    id: 16,
    name: 'Postman',
    path: postman,
  },
];

const contactIcons = [
  {
    id: 1,
    name: 'GitHub',
    route: 'https://github.com/gracehtet',
    path: github,
  },
  {
    id: 2,
    name: 'LinkedIn',
    route: 'https://www.linkedin.com/in/thirihtethtetaung/',
    path: linkedin,
  },
  {
    id: 3,
    name: 'Twitter',
    route: 'https://twitter.com/Grace_Htet4',
    path: twitter,
  },
];

export { navIcons, techIcons, contactIcons };
