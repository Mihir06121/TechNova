import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer'
import AOS from'aos';
import RulesCod from './components/Rules/Cod';
import RulesWebDesign from './components/Rules/WebDesign'
import RulesCoding from './components/Rules/Coding'
import RulesQuiz from './components/Rules/Quiz'
import RulesValorant from './components/Rules/Valorant'
import RulesCsgo from './components/Rules/Csgo'
import RulesDebugging from './components/Rules/Debugging';
import RulesAmongus from './components/Rules/AmongUs';
import WebinarRegister from './components/Rules/WebinarRegistration'
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
            <Route exact path="/rulesamongus">
              <RulesAmongus />
            </Route>
            <Route exact path="/rulesdebugging">
              <RulesDebugging />
            </Route>
            <Route exact path="/rulescsgo">
              <RulesCsgo />
            </Route>
            <Route exact path="/rulesValorant">
              <RulesValorant />
            </Route>
            <Route exact path="/rulescoding">
              <RulesCoding />
            </Route>
            <Route exact path="/rulesquiz">
              <RulesQuiz />
            </Route>
            <Route exact path="/registerwebinar">
              <WebinarRegister />
            </Route>
            <Route exact path="/ruleswebdesign">
              <RulesWebDesign />
            </Route>
            <Route exact path="/rulescod">
              <RulesCod />
            </Route>
            <Route exact path="/">
              <Header /><br/>
              <Home /><br/>
              <About />
              <Events />
              <Team />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
