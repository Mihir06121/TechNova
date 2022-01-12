import React, {useState} from 'react'
import { Button } from 'reactstrap'

const RulesCoding = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-lg-5 pb-lg-3">
     <div className="p-lg-5"> 
     <div className="bgmibg"></div>
     </div>
         <div align="center" className="p-lg-5 p-3">
             <h1>BGMI</h1>
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
                    <li>
                    In the case of the same points, the team with the most kills will get an advantage.
                    </li>
                    <li>

Join room 5 min otherwise, we are not responsible if any player sits on your slot*.
                    </li>
                    <li>

If you were killed by a hacker provide a suitable  death cam or pov without that we cannot take any action.
                    </li>
                    <li>

Result screenshot of match is compulsory.
                    </li>
                    <li>

Room id and password will be sent to your captain 10 minutes before the match starts.
                    </li>
                    <li>

Players having level 35 or less in-game may be kicked from the room depending upon admin team's decision.
                    </li>
                    <li>

Rooms are created by the system. If teamers/hackers are found in the match, please report their id's or pign to our chat support with the screenshot.
                    </li>
                    <li>

The result will be adjusted according to the point table.
                    </li>
                    <li>

The total score of the player (position + kill) will determine their final position in the tournament.
                    </li>
                    <li>

Teaming/hacking would result in a permanent ban for the player from all future tournaments. The players shall be allotted reward according to the final position and kills you secure in the match.
                    </li>
                    <li>

Please download all the maps and update your game to the latest version prior tournament.
                    </li>
                    <li>

The decision of organizers is final and binding.
                    </li>
                    <li>

Abusing admins in any context is out of boundaries and can lead to disqualification.
                    </li>
                </ul>
            </p>
            Rank - Point<br/>
            1-15<br/>
            2-12<br/>
            3-10<br/>
            4-08<br/>
            5-06<br/>
            6-04<br/>
            7-02<br/>
            8-01<br/>
            9-01<br/>
            10-01<br/>
            11-01<br/>
            12-01<br/>
            13-00<br/>
            14 to 20-00<br/>
            Per Kill pt = 01
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/vGLgnnKCCuRhPdPK8" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesCoding