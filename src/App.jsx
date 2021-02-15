import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import AOS from'aos';
import RulesCod from './components/Rules/Cod';
import RulesCoding from './components/Rules/Coding'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


 const App = () => {
   
  // let suggestion = "This site is still under development, stay tunned"
  // alert(suggestion)

    AOS.init({
      duration:'1200',
    })

    
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/rulescoding">
              <RulesCoding />
            </Route>
            <Route exact path="/rulescod">
              <RulesCod />
            </Route>
            <Route exact path="/">
              <Header /><br/>
              <Home /><br/>
              <About />
              <Events />
              <Gallery />
              <Team />
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
