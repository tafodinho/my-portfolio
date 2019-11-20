import React from 'react';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';
import Footer from 'components/Footer';

import projects from 'content/projects';
import statements from 'content/about-me';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDiv: false,  
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      showDiv: !this.state.showDiv,
    })
  }

  render() {
    const regularProjects = projects.filter(project => project.category === "regular")
    const otherProjects = projects.filter(projects => projects.category === "others")
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects projects={regularProjects} />
        <div className="background" />
        <h2 
          id="other-projects" 
          className="section-title other-projects-title" 
          onClick={this.handleClick}
        >
          Load Other Projects
        </h2>
        { this.state.showDiv ? <Projects projects={otherProjects} /> : "" }
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}
