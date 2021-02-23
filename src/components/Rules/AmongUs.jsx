import React, {useState} from 'react'
import { Button, Collapse,  CardBody } from 'reactstrap'

const RulesAmongus = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
   
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

 return(
     <div id="codhead" className="pt-5 pb-5">
     <div className="p-5"> 
     <div className="amongusbg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>Among Us</h1>
         </div>
         <div className="p-5">
            <p className="p-5">
            Competitive Among Us uses a point based ranking system to organize players by their performance. Points are awarded based on whether the player is playing for the crew or imposters.
            <br/>
            Crewmate:<br/>
            Win - 3 points <br/>
            Loss - 0 points<br/>
            Correct votes - 1 point<br/>
            Incorrect votes - -1 point<br/>
            Skip/No vote - 0 point<br/>
            Imposter:<br/>
            Win - 5 points<br/>
            Loss - 0 points<br/>
            Kill - 1 point<br/>
            </p>
            <p className="p-5">
                <h1>Rules</h1>
                <ul>
                    <li>
                    The tournament is played on the Polus map, though this seems to have been a personal choice and could easily be changed to any of the other maps, or a combination therein.
                    </li>
                    <li>
                    Players play in a number of pools and the points determine which players from each pool advance to the later stages. 
                    </li>
                    <li>
                    Each game will be played with 10 players in each Lobby.
                    </li>
                </ul>
            </p>
         </div>
        <div align="center" className="conatiner-fluid">
            <Button color="primary" onClick={toggle} id="toggle" style={{ marginBottom: '1rem' }}>
            Register
            </Button>
            <Collapse isOpen={isOpen} className="bg-dark">
                <CardBody className="bg-dark mx-auto">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeD_y-ikVslYqIDcsdWlTrYMHjH-GGMLJihSr0aVX8yRzhvw/viewform?embedded=true" 
                width="640" height="1182" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </CardBody>
            </Collapse>
        </div>
     </div>
 )
}

export default RulesAmongus