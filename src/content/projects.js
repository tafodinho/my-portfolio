import bookstore from 'images/bookstore1.png';
import weather from 'images/weather.png';
import battleship from 'images/battleship.png';
import todo from 'images/todo.png';
import connectme from 'images/connectme.png';
import calculator from 'images/calculator.jpg';
import portfolio from 'images/portfolio.png';
import zanko from 'images/zankotv.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: "Zanko TV",
    description:
      'This is a realization of <a href="https://dribbble.com/shots/6868524-IPTV-Website-user-interface">this</a> design by <a href="https://dribbble.com/aichdesign">Aich Design</a>. The site supports mobile, tablet, and desktop sizes. Media queries only - no external libraries or JavaScript.',
    skills: ['HTML5', 'CSS3'],
    image: zanko,
    links: {
      github: 'https://github.com/tafodinho/zanko-tv/',
      preview: 'https://tafodinho.github.io/zanko-tv/',
    },
    category: "regular",
  },
  {
    title: 'Movie CMS',
    description:
      'Front-end of a Movie CMS application that will help organize and manage your movies. The app is fast, dynamic and responsive to actions as it was build it with React & Redux. ',
    skills: ['JSX', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS', 'Redux'],
    image: bookstore,
    links: {
      github: 'https://github.com/tafodinho/react-redux-bookstore',
      preview: 'https://tafang-bookstore.herokuapp.com/',
    },
    category: "regular",
  },
  {
    title: 'ConnectMe',
    description:
      'This is a social network application with features similar to that of Facebook, such as sending friend requests, receiving friend requests, accepting requests, making posts, commenting, and liking posts. I achieved this using Ruby on rails, HTML, CSS, Sass and PostgreSql.',
    skills: ['Ruby', 'Ruby on Rails', 'HTML5', 'CSS3', 'PostgreSql'],
    image: connectme,
    links: {
      github: 'https://github.com/tafodinho/connect-me',
      preview: 'https://josh-connect-me-app.herokuapp.com',
    },
    category: "regular",
  },
  {
    title: 'Weather app',
    description:
      'This project is based off this <a href="https://www.theodinproject.com/courses/javascript/lessons/weather-app">challenge</a>. Wrangled with styling HighCharts, and uses Promises. Data is from the <a href="https://api.openweathermap.org/">Open weathermap APi</a>. Search autocomplete relies on the lookup endpoint and sometimes runs slow. Please be patient!',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS'],
    image: weather,
    links: {
      github: 'https://github.com/tafodinho/My-weather',
      preview: 'https://raw.githack.com/tafodinho/My-weather/dev/dist/index.html',
    },
    category: "regular",
  },
  {
    title: 'Calculator app',
    description:
      'Applied techniques learned from <a href="https://github.com/microverseinc/project-react-calculator/blob/master/milestones/MILESTONE_5.md">React Calculator</a> - writing requirements, iterating, and structuring app as an MVC. This really helped me build a much better foundation in JavaScript for web development. Aside from the Material Components library for the ripples, no frameworks were used. Design is based off the original <a href="https://play.google.com/store/apps/details?id=com.google.android.calculator&hl=en">Google Calculator on Android</a>.',
    skills: [
      'HTML5',
      'CSS3',
      'Sass',
      'JSX',
      'ES6',
      'React',
    ],
    image: calculator,
    links: {
      github: 'https://github.com/tafodinho/react-calculator/',
      preview: 'https://josh-calculator.herokuapp.com/',
    },
    category: "regular",
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/tafodinho/my-portfolio',
      preview: 'https://tafang-portfolio.herokuapp.com/',
    },
    category: "regular",
  },
  {
    title: 'Battleship',
    description:
      "A multiplayer battleship game where the main goal is to destroy all your opponent's ships at sea. The full description of the game can be found <a ahref='https://www.theodinproject.com/courses/javascript/lessons/battleship'>here</a>",
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    image: battleship,
    links: {
      github: 'https://github.com/tafodinho/battleship',
      preview: 'https://raw.githack.com/tafodinho/battleship/new-fixes-to-game/dist/index.html',
    },
    category: "others",
  },
  {
    title: 'Things Todo(A todo app)',
    description:
      "A todo list app to keep track of your activities. You can also group todos according to priority, or place individual todos into projects.",
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    image: todo,
    links: {
      github: 'https://github.com/tafodinho/things-todo',
      preview: 'https://raw.githack.com/tafodinho/things-todo/master/dist/index.html',
    },
    category: "others",
  },
];
