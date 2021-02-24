import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Collapse,  CardBody } from 'reactstrap'

const Csgo = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

 return(
     <div id="codhead" className="pt-5 pb-5"> <div className=""> 
     <div className="csgobg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>CS:GO</h1>
         </div>
        <div className="pt-5 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>24<sup>th</sup> Febuary 2021 - to - 9<sup>th</sup> March 2021</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
                <p>
                    <ul>
                        <li>By participating in our tournaments, all participants automatically agree that they vow to respect fellow participants
                            and the MOBILE E-SPORTS® Staff. </li>
                        <li>
                        </li>
                        It is a 5 (Five) Player Team Tournament
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
                        During an on-going tournament, players are not allowed to change their in-game name. Clan Tags before in-game
                        names are allowed to be changed. 
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
                        Substitutions are not applicable, registered 5 must play through duration of
                        tournament.
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
                        The first team to win 16 rounds will be declared the victor of the match and
                        will advance
                        </li><li> 
                        In case of a tie after the regulation rounds end (15-15), 6 extra rounds
                        will be played. 
                        </li>
                        <li>
                        The map each team will play will be picked through a map veto.
                        </li><li>
                        Starting side will be chosen by a knife round.
                        </li>
                        <li>
                        Each individual round is 1:45 in duration
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
                        Game version – The tournament will use the latest available version of the game
                        client.
                        </li>
                        <li>
                        Anti-Cheat – Tournament servers will be VAC enabled and will require VAC enabled
                        clients.
                        </li>
                        <li>
                        If a player is VAC banned then they are not allowed to take part in
                        a match.
                        </li>
                        <li>
                        In-Game chat – It is not allowed to write about things that are not directly
                        related to the match in the in-game chat.<br/>                        This is including but not limited to discussion of the technical
                        issues and any sort of advertisement.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
            
        <Button color="primary"><a href="https://forms.gle/ZivGCsSUzhhpXkEN7" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default Csgo