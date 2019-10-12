import bookstore from 'images/bookstore.jpg';
import stockmarketchart from 'images/stockmarketchart.jpg';
import wakeyalarmclock from 'images/wakeyalarmclock.jpg';
import wakeybackgrounds from 'images/wakeybackgrounds.png';
import calculator from 'images/calculator.jpg';
import portfolio from 'images/portfolio.png';
import tomsmetal from 'images/tomsmetal.jpg';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Bookstore',
    description:
      'Front-end of a bookstore application that will help organize and manage a bookstore. The app is fast, dynamic and responsive to actions and therefore I decided to build it with React & Redux. ',
    skills: ['JSX', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS', 'Redux'],
    image: bookstore,
    links: {
      github: 'https://github.com/tafodinho/react-redux-bookstore',
      preview: 'https://tafang-bookstore.herokuapp.com/',
    },
  },
  {
    title: 'Weather app',
    description:
      'This project is based off this <a href="https://www.freecodecamp.com/challenges/chart-the-stock-market">challenge</a>. Wrangled with styling HighCharts and learned the use of Promises. Data is from the <a href="https://developer.tradier.com/documentation">Tradier API</a>. Search autocomplete relies on the lookup endpoint and sometimes runs slow. Please be patient!',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS'],
    image: stockmarketchart,
    links: {
      github: 'https://github.com/vai0/stockmarketchart',
      preview: 'https://stock.justinchi.me/',
    },
  },
  {
    title: 'Wakey Alarm Clock',
    description:
      'My first major app built with ReactJS and it was a tremendous learning experience. This project was created for a good friend - check out her <a href="http://www.xiaotongyuchi.com/wakeyalarm">mock-up</a>! Polymer components were taken directly from Google spec to ensure smooth animations on mobile (this was before Material Components existed).',
    skills: [
      'HTML5',
      'CSS3',
      'Sass',
      'JavaScript',
      'ReactJS',
      'Polymer',
      'Material Design',
    ],
    image: wakeyalarmclock,
    links: {
      github: 'https://github.com/vai0/alarmclock',
      preview: 'https://alarmclock.justinchi.me/',
    },
  },
  {
    title: 'Wakey Weather Backgrounds',
    description:
      'Animated backgrounds for when the alarm is triggered in the <a href="https://justinchi.me/alarmclock/">Wakey Alarm Clock</a> app. CSS animations and a bit of JavaScript for the snow and rain. No external libraries.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    image: wakeybackgrounds,
    links: {
      github: 'https://github.com/vai0/weather-animations',
      preview: 'https://weather-anim.justinchi.me/',
    },
  },
  {
    title: 'Google Calculator',
    description:
      'Applied techniques learned from <a href="https://watchandcode.com/p/practical-javascript">Practical Javascript</a> - writing requirements, iterating, and structuring app as an MVC. This really helped me build a much better foundation in JavaScript for web development. Aside from the Material Components library for the ripples, no frameworks were used. Design is based off the original <a href="https://play.google.com/store/apps/details?id=com.google.android.calculator&hl=en">Google Calculator on Android</a>.',
    skills: [
      'HTML5',
      'CSS3',
      'Sass',
      'JavaScript',
      'ES6',
      'Material Components',
    ],
    image: calculator,
    links: {
      github: 'https://github.com/vai0/material_calculator',
      preview: 'https://calc.justinchi.me/',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/vai0/portfolio',
      preview: 'https://www.justinchi.me/',
    },
  },
  {
    title: "Tom's Metal Site",
    description:
      'A revamped version of the website of the company at my first job. You can see the original site <a href="http://www.tomsmetal.com/">here</a>. The site supports mobile, tablet, and desktop sizes. Media queries only - no external libraries or JavaScript.',
    skills: ['HTML5', 'CSS3'],
    image: tomsmetal,
    links: {
      github: 'https://github.com/vai0/tomsmetal_site',
      preview: 'https://tomsmetal.justinchi.me/',
    },
  },
];
