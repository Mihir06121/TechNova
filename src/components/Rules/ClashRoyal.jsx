import React, {useState} from 'react'
import { Button } from 'reactstrap'

const RulesCoding = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-lg-5 pb-lg-3">
     <div className="p-lg-5"> 
     <div className="clashRoyalebg"></div>
     </div>
         <div align="center" className="p-lg-5 p-3">
             <h1>Clash Royale</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
            <p>
                <ul>
                    <h3>Technical Rules</h3>
                    <li>
                    Matches will be played in classic mode.
                    </li>
                    <li>
    All matches will be played in ‘best of 3’ format.
                    </li>
                    <li>
    Semi-finals and Finals will be played in ‘best of 5’ format.
                    </li>
                    <li>
    The tournament will begin in league phase and top players in the points table will be advanced to knockout stages.(depends upon the no. of participants).
                    </li>
                    <li>
    Players shall be online on the given match time or else direct win will be awarded to the opponent no rematch will be done.
                    </li>
                    <h3>In-Game rules</h3>
                    <li>
                    Players shall not use any deck containing spamming troops(i.e mirror , clone ,etc)
                    </li>
                    <li>
    2. If any technical error occurs the players may inform the following incharges with proper proof(i.e screenshot , recording). 
                    </li>
                    <li>
    3. Players shall not quit any ongoing game if done so , the final scores will be considered ethical. 
                    </li>
                </ul>
            </p>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/XFxDQjm53nFse2xRA" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesCoding