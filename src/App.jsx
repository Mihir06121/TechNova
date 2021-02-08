import React, { Component } from 'react'
import Navigation from './components/navigation';
import Home from './components/Home';
// import Features from './components/features';
import About from './components/about';
import Events from './components/Events';
import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import AOS from'aos';
// import JsonData from './data/data.json';

export class App extends Component {
  // state = {
  //   landingPageData: {},
  // }
  // getlandingPageData() {
  //   this.setState({landingPageData : JsonData})
  // }

  // componentDidMount() {
  //   this.getlandingPageData();
  // }

  render() {

    AOS.init({
      duration:'1200',
    })

    return (
      <div>
        <Navigation />
        <Home />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        <About />
        <Events />
        <Gallery />
        {/* <Testimonials /> */}
        <Team />
        <Contact />
      </div>
    )
  }
}

export default App;
