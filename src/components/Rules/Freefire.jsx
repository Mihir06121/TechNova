import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Collapse,  CardBody } from 'reactstrap'

const Freefire = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div id="codhead" className="pt-5 pb-5"> <div className=""> 
     <div className="freefirebg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>Free Fire</h1>
         </div>
        <div className="pt-5 pb-5">
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
                        It is strictly prohibited to gamble or bet during an ongoing tournament. This rule applies to players or a team management that has any relations to a participating party.
                        Such actions can give unfair advantage to close associates of teams that are playing. 
                        </li>
                        <li>
                        We reserve the right to edit the rules at any time and disqualify teams for reasons not stated in this list or take other action. 
                        </li>
                        <li>
                        All participants agree that their matches may be streamed and/or recorded and published on our platforms such as Youtube. 
                        </li>
                        <li>
                        It is prohibited to spam or use offensive messages. 
                        </li>
                        <li>
                        All participants agree that their matches may be streamed and/or recorded and published on our platforms such as Youtube. 
                        </li>
                        <li>
                        Team members that are aware of a fellow hacker or cheater’s actions yet failed to come forth in reporting him will
                        be banned from tournament. 
                        </li>
                        <li>
                        Only touch input is allowed to control the game in this tournament.
                        </li>
                        <li>
                        Ignorance of rules does not justify rule breaking. If you have questions about any rules, contact our support. 
                        </li>
                    </ul>
                </p>
            </div>
            <hr className="bg-light m-3" />
            <div>
                <h1 align="center" className="pb-3">Match Rules</h1>
                <p>
                    <ul>
                        <li>
                        The usage of cheats, hacks, or any other third-party applications that give you an unfair advantage over your opponents will result in immediate disqualification. 
                        </li>
                        <li>
                        Teams that attempt to use players which are not registered in their team may be disqualified. 
                        </li>
                        <li>
                        All players must remain in the game’s lobby following the conclusion of each match. This allows us to view their final score on the scoreboard.
                        Players that leave the lobby earlier and thus do not show up on the scoreboard may be suspended from on-going tournaments.
                        </li>
                        <li>
                        Participants should join the lobby at least 10 mins before the match time.
                        </li>
                        <li>
                        It is not allowed to switch to the spectator mode. If a player is caught using the spectator mode, that team will automatically have to forfeit the current round of that match. 
                        </li>
                        <li>
                        Account sharing will be met with disqualification. Only the original owner of the Call of Duty: Mobile account may use it in tournaments. 
                        </li>
                        <li>
                        Abusing in-game glitches that give a team an unfair advantage is not permitted. Teams caught doing so may be disqualified. 
                        </li>
                        <li>
                        Depending on the settings for each individual tournament, more rules may apply for every match, such as banned items. If any special rules apply, then they may be found in the tournament’s registration article on this website. 
                        </li>
                        <li>
                        Playing via Emulators/Controllers is not allowed.
                        </li><li> 
                        Admin Team has right to ban/kick any player without prior notice.
                        </li>
                        <li>
                        Teaming/Hacking is not allowed and will result in a permanent ban.
                        </li>
                        <li>Decision taken by the Admin Team will be final and binding and won't be changed or reverted under any circumstances
                        </li>
                    </ul>
                </p>
            </div>
            <hr className="bg-light m-3" />
            <div className="">
                <h1 align="center" className="pb-3">GAME SPECIFIC RULES</h1>
                <div className="">
                    <ul>
                        <li>
                        Kill Points are awarded to Player based on the number of Kills the Player accumulates during each Match.
                        A Player will earn two (2) Kill Points per Kill.
                        </li>
                        <li>
                        Placement Points are awarded to Player based on their finishing position at the end of each Match.
                        Player will accumulate Placement Points based on the following matrix.
                        </li>
                        <li>
                        A Player’s Match Points is the sum of their Kill Points and Placement Points.
                        </li>
                        <li>
                        Kill Points + Placement Points = Match Points
For example, a Player who accumulates 10 Kills and finishes the Match in the 3rd position will earn
37 Match Points (20 + 17 = 37).
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                #POINT SYSTEM
                    Placement Points<br/>
                    #1 20<br/>
                    #2 17<br/>
                    #3 15<br/>
                    #4 13<br/>
                    #5 10<br/>
                    #6 9<br/>
                    #7 8<br/>
                    #8 7<br/>
                    #9 6<br/>
                    #10 5<br/>
                    #11 4<br/>
                    #12 3<br/>
                    #13 2<br/>
                    #14 1<br/>
                    Rest 0<br/>
                </div>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
            
        <Button color="primary"><a href="https://forms.gle/esVynbU3NsFZzwMH6" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default Freefire