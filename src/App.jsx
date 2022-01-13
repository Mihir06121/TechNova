import React, {useEffect} from 'react'
// import Header from '../components/Header';
// import Home from '../components/Home';
// import About from '../components/About';
// import Events from '../components/Events';
// import Gallery from '../components/Gallery';
// // import Team from '../components/Team';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer'
import AOS from'aos';
import Home from './components/2k21_22/Home'
import RulesCod from '../src/components/Rules/Cod';
import RulesWebDesign from '../src/components/Rules/WebDesign'
import RulesCoding from '../src/components/Rules/Coding'
import RulesQuiz from '../src/components/Rules/Quiz'
import RulesValorant from '../src/components/Rules/Valorant'
import RulesStandUpComedy from '../src/components/Rules/StandupComedy'
import RulesFreefire from '../src/components/Rules/Freefire'
import RulesDebugging from '../src/components/Rules/Debugging';
import RulesDigitalPoster from '../src/components/Rules/DigitalPoster'
import RulesBgmi from '../src/components/Rules/Bgmi'
import RulesClashRoyale from '../src/components/Rules/ClashRoyal'
import RulesE_Chess from '../src/components/Rules/E_Chess'
import WebinarRegister from '../src/components/Rules/WebinarRegistration'
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
  }
  
    AOS.init({
      duration:'1200',
    })
  
  const ScrollToTop = withRouter(_ScrollToTop)
  
   const PastEvents = () => {
     
    // let suggestion = "This site is still under development, stay tunned"
    // alert(suggestion)
  
      AOS.init({
        duration:'1200',
      })
  
      
      return (
        <div>
          <Router>
            <Switch>
              <ScrollToTop>
              <Route exact path="/rulesbgmi">
                <RulesBgmi />
              </Route>
              <Route exact path="/rulesdebugging">
                <RulesDebugging />
              </Route>
              <Route exact path="/rulesclashroyale">
                <RulesClashRoyale />
              </Route>
              <Route exact path="/rulesfreefire">
                <RulesFreefire />
              </Route>
              <Route exact path="/rulesechess">
                <RulesE_Chess />
              </Route>
              <Route exact path='/rulesdigitalposter'>
                <RulesDigitalPoster/>
              </Route>
              <Route exact path="/rulesstandupcomedy">
                <RulesStandUpComedy />
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
              <Route exact path="/rulesuidesign">
                <RulesWebDesign />
              </Route>
              <Route exact path="/rulescod">
                <RulesCod />
              </Route>
              <Route exact path="/">
                {/* <Header /><br/>
                <Home /><br/>
                <About />
                <Events />
                <Gallery />
                <Contact />
                <Footer /> */}
                <Home />
              </Route>
              </ScrollToTop>
            </Switch>
          </Router>
        </div>
      )
  }
  
  export default PastEvents;