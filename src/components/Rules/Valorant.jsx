import React, {useState} from 'react'
import { Button, Collapse,  CardBody } from 'reactstrap'

const RuleValorant = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

 return(
     <div id="codhead" className="pt-5 pb-5">
        <div className=""> 
        <div className="valorantbg"></div>
        </div>
         <div align="center">
             <h1>Valorant</h1>
         </div>
        <div className="pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
                <p>
                    <ul>
                        <li>By participating in our tournaments, all participants automatically agree that they vow to respect fellow participants
                            and the MOBILE E-SPORTS® Staff. </li>
                        <li>
                        Valorant nickname has to be in format Riot ID#Tagline. (Example:
                        Mrsmith#EUNE). Any other format will be invalid.
                        </li>
                        
                    </ul>
                </p>
            </div>
            <hr className="bg-light m-3" />
            <div className="p-5">
                <h1 align="center" className="pb-3">Match Rules</h1>
                <p>
                    <ul>
                        <li>
                        Before the Match:<br/>
                            Tournament Round will start as scheduled unless said otherwise                        
                        </li>
                        <li>
                        Teams that attempt to use players which are not registered in their team may be disqualified. 
                        </li>
                        <li>
                        During the Match:
                        If one of the teams will not pick all the agents in the character selection
                        screen and the game goes back to the
                        lobby, the game has to be remade
                        </li>
                        <li>
                        Once the match has started, only the players that are in the lobby are eligible to play. In the case of a player disconnecting and is not able to join back,
                        a team is allowed to have a registered player on their team to substitute. This is allowed only once per match. 
                        </li>
                        <li>
                        It is not allowed to switch to the spectator mode. If a player is caught using the spectator mode, that team will automatically have to forfeit the current round of that match. 
                        </li>
                        <li>
                        If any of the players are not connected to the game before the counter reaches 0, the team can call a remake and the game has to be remade 
                        </li>
                        <li>
                        Abusing in-game glitches that give a team an unfair advantage is not permitted. Teams caught doing so may be disqualified. 
                        </li>
                        <li>
                        If the game started on the wrong map, the game has to be remade.
                        </li>
                        <li>
                        In order to do the remake, all the players have to leave the match. Start the
                        next game as soon as possible. Both team captains will have to write ready
                        again. If the team is not ready by 5 minutes after the remake,
                        the team which is not ready will be disqualified. Game can be remade only once,
                        the game has to be played in the way it started after the remake, even if the
                        issues will occur.
                        </li>
                    </ul>
                </p>
            </div>
            <hr className="bg-light m-3" />
            <div className="p-5">
                <h3>
                MAPS:-<br/></h3>
                <ul>
                    <h5>
                    <li>
                        Bind
                    </li>
                    <li>
                        Haven
                    </li>
                    <li>
                        Split
                    </li>
                    <li>
                        Ascent
                    </li>
                    <li>
                        Icebox
                    </li>
                    </h5>
                </ul>
            </div>
            <div>
            <div className="p-5">
                <h1>SERVER SETUP</h1>
                <h5>Map: depending on which map was selected to be played from the map pool<br/><br/>
                Mode: Standard<br/>
                Options<br/>
                Allow Cheats: Off<br/>
                Tournament Mode: On<br/>
                Overtime: Win by Two: On<br/>
                Primary servers: Mumbai<br/>
                </h5>
            </div>
            </div>
            <div className="p-5">
                <h1>STREAMING</h1>
                We reserves exclusive rights for broadcasting and streaming for all its events<br/><br/>
                We do however allow people to personally stream their matches and games. If you
                decide to stream, we REQUIRE that you include “Technova21” in your streaming
                title and we also RECOMMEND that you are using delay on your stream,
                2 min or more is recommended
            </div>
        </div>
        <div className="p-5">
            <h1>
                CHEATING
            </h1>
            <p>
            It is forbidden to cheat, modify the game files, exploit bugs, and/or use any
            third-party application which would give an unfair advantage against other
            users.<br/><br/>
            All cheats are completely forbidden to use under any circumstance while playing
            in any event at Technova
            Using any cheat will result in bans and disqualifications. This includes, but
            are not limited to:<br/>
            ESP
            Radar hacks<br/>
            Wallhacks<br/>
            Speed hacks<br/>
            Aim hacks<br/>
            Hitbox manipulation<br/>
            Teleportation (any kind of teleportation, which is not possible in the game)<br/>
            The usage of a bug/bugs to gain an advantage versus your opponents
            </p>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/PxzSVBRuXogtKktQ8" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RuleValorant