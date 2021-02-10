import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import AOS from'aos';

 const App = () => {
   
  let suggestion = "This site is still under development, stay tunned"
  alert(suggestion)

    AOS.init({
      duration:'1200',
    })

    
    return (
      <div>
        <Header /><br/>
        <Home /><br/>
        <About />
        <Events />
        <Gallery />
        <Team />
        <Contact />
      </div>
    )
}

export default App;
