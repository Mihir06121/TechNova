import React, {useState} from 'react'
import { Button } from 'reactstrap'

const RulesCoding = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-5 pb-3">
     <div className="p-5"> 
     <div className="e-chessbg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>E-CHESS</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
            <ul>
                <li>
                The platform for the chess tournament will be in Chess Universe App which is available in playstore(Android) and Apple App Store(IOS) .
                </li>
                <li>
Create your account and edit your name as your first name (_) Underscore college name (Hemant_SLRTDC).
                </li>
                <li>
                The Duration of the game will be 10 mins per match. 
                </li>
                <li>
                Participants will be informed weather to share their screen or not.
                </li>
                <li>
                The winner will be determined in terms of the points earned and time consumed by the player.
                </li>
                <li>
                The game should be updated to the latest version before Playing.
                </li>
                <li>
                Abusing the Organizer or the volunteers will lead you to Disqualifications.                    
                </li>
            </ul>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/bGb8Dug6sxLMG1kRA" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesCoding