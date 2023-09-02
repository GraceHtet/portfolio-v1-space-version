import moneyTracker from '../assets/img/projects/moneyTracker.png';
import houseRent from '../assets/img/projects/houseRent.png';
import challengeCode from '../assets/img/projects/challengeCode.png';
import spiritualEvent from '../assets/img/projects/spiritualEvent.png';
import spaceTraveller from '../assets/img/projects/spaceTraveller.png';
import todoList from '../assets/img/projects/todolist.png';
import leaderBoard from '../assets/img/projects/leaderBoard.png';
import mathMagician from '../assets/img/projects/mathMagician.png';

const all = [
  {
    id: 1,
    name: 'House Rent',
    description:
      'This app is especially for those who want to visit and check a house to rent. In this app, you can see the houses, the detail, and you can reserve a house. If you are an admin you can add or delete houses.',
    language: ['React', 'Ruby', 'Rails', 'Render'],
    type: 'group',
    img: houseRent,
    live: 'https://house-rent-new5.onrender.com/',
    source: 'https://github.com/alexiscyber14/house-rent-backend',
  },
  {
    id: 2,
    name: 'Money Tracker',
    description:
      'Money Tracker App is an app that helps you to manage your budget. You can create your category and transactions. You can also see your budget report.',
    language: ['Ruby', 'Rails', 'Heroku'],
    type: 'solo',
    img: moneyTracker,
    live: 'https://money-tracker-rails-6abdef4b7828.herokuapp.com/',
    source: 'https://github.com/GraceHtet/budget-app',
  },
  {
    id: 3,
    name: 'Challenge Code',
    description:
      'Challenge Code is a web application where you can see upcoming challenges from some sites. You can also go and check to that challenge link.',
    language: ['JavaScript', 'React', 'Netlify'],
    type: 'solo',
    img: challengeCode,
    live: 'https://money-tracker-rails-6abdef4b7828.herokuapp.com/',
    source: 'https://github.com/GraceHtet/budget-app',
  },
  {
    id: 4,
    name: 'Spiritual Event',
    description:
      'This is a single-page website built with HTML and CSS for Spiritual Conference where you can see the meeting time, place, workshops, and authors.',
    language: ['HTML', 'CSS', 'GitHub'],
    type: 'solo',
    img: spiritualEvent,
    live: 'https://gracehtet.github.io/CapStonePj1_ConferencePage/',
    source: 'https://github.com/GraceHtet/CapStonePj1_ConferencePage',
  },
  {
    id: 5,
    name: 'Space Traveller Hub',
    description:
      "Space Travelers' Hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    language: ['JavaScript', 'React', 'Render'],
    type: 'group',
    img: spaceTraveller,
    live: 'https://space-traveler-hub-qaca.onrender.com/',
    source: 'https://github.com/alexiscyber14/house-rent-backend',
  },
  {
    id: 6,
    name: 'Leaderboard',
    description:
      'You can see the scores from others which are fetched from API. And you can also add your score. Once you refresh the page, you will see your result in the table.',
    language: ['JavaScript', 'Webpack', 'GitHub'],
    type: 'mini',
    img: leaderBoard,
    live: 'https://gracehtet.github.io/leaderboard/dist/',
    source: 'https://github.com/GraceHtet/leaderboard',
  },
  {
    id: 7,
    name: 'Math Magician',
    description:
      'This is the calculator page where you can do arithmetical operations. You can do addition, subtraction, multiplication, division.',
    language: ['JavaScript', 'React', 'Render'],
    type: 'mini',
    img: mathMagician,
    live: 'https://math-magician-8u3i.onrender.com/',
    source: 'https://github.com/GraceHtet/mathMagician',
  },
  {
    id: 8,
    name: 'To Do List',
    description:
      'The todo-list project is to mark the things to do and to check whether the list to do is completed or not. This is created with HTML, CSS, JavaScript, and Webpack. Also testing for each function with Jest is done in the project.',
    language: ['JavaScript', 'Webpack', 'GitHub'],
    type: 'mini',
    img: todoList,
    live: 'https://gracehtet.github.io/ToDoList-Webpack-/dist/',
    source: 'https://github.com/GraceHtet/ToDoList-Webpack-',
  },
];

const solo = all.filter((pj) => pj.type === 'solo');

const group = all.filter((pj) => pj.type === 'group');

const mini = all.filter((pj) => pj.type === 'mini');

const projects = [
  {
    id: 1,
    name: 'All',
    pj: all,
  },
  {
    id: 2,
    name: 'Collaborative',
    pj: group,
  },
  {
    id: 3,
    name: 'Solo',
    pj: solo,
  },
  {
    id: 4,
    name: 'Mini',
    pj: mini,
  },
];

export default projects;
