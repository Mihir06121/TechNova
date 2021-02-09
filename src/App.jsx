import React, { Component } from 'react'
import Header from './components/Header';
import Home from './components/Home';
// import About from './components/about';
// import Events from './components/Events';
// import Gallery from './components/gallery';
// import Team from './components/Team';
// import Contact from './components/contact';
import AOS from'aos';

export class App extends Component {

  render() {

    AOS.init({
      duration:'1200',
    })

    return (
      <div align="center" className="container">
        <Header /><br/>
        <Home />
        {/* <About />
        <Events />
        <Gallery />
        <Team />
        <Contact /> */}
      </div>
    )
  }
}

export default App;
