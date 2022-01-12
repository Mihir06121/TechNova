import React, {useState} from 'react'
import { Button, Collapse,  CardBody } from 'reactstrap'
import "./Rules.css"

const RuleCod = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div id="codhead" className="pt-5 pb-5">
         <div className="img-fluid"> 
         <div className="codbg"></div>
         </div>
         <div align="center" className="pt-5">
             <h1>Call Of Duty</h1>
         </div>
        <div className="pt-5 pb-5">
            <div className="p-5">
                {/* <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div> */}
            <h2 align="center" className="pb-3">General Rules</h2>
                <p>
                    <ul>
                        <li>By participating in our tournaments, all participants automatically agree that they vow to respect fellow participants
                            and the MOBILE E-SPORTS® Staff. </li>
                        <li>
                        The usage of ‘jailbroken’ or ‘rooted’ devices in tournament matches is not permitted
                        </li>
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
            <div className="p-5">
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
                        Once the match has started, only the players that are in the lobby are eligible to play. In the case of a player disconnecting and is not able to join back,
                        a team is allowed to have a registered player on their team to substitute. This is allowed only once per match. 
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
                        Operator Restrictions cover the following: None. 
                        </li>
                        <li>
                        Scorestreak restrictions: None.
                        </li>
                        <li>
                        Weapon Restrictions: None.
                        </li>
                        <li>
                        Skins: Weapon Variants and Purchased Weapons that alter the default iron sights and/or ANY weapon properties (
                        damage, speed, etc) are not allowed. 
                        </li>
                        <li>
                        Perk Restrictions: None. 
                        </li>
                        <li>
                        Banned Weapon Perks (Gunsmith): None. 
                        </li>
                        <li>
                        Attachment Restrictions: None. 
                        </li>
                        <li>
                        Equipment Restrictions: None. 
                        </li>
                    </ul>
                </p>
            </div>
            <hr className="bg-light m-3" />
            <div className="">
                <h1 align="center" className="pb-3">Modes</h1>
                <h3 align="center">
                    Multiplayer
                </h3>
                <div className="p-5">
                        STAGE MATCHES
                        TEAM DEATHMATCH<br/><br/>
                        First team to score 40 kills will win
                        FINAL MATCH
                        SEARCH AND DESTROY<br/><br/>

                            Total of 6 rounds
                            first 3 rounds to save the objective and defend the attackers from planting the bomb
                            second 3 rounds to attack the objective and plant the bomb <br/><br/>
                        DOMINATION<br/><br/>

                            Consisting of 2 rounds
                            there are 3 objectives in the map A (alpha), B (bravo) and C (charlie)
                            first team to reach 150 points wins the match
                            Time Limit : 300 secs 
                            <br/><br/>
                        HARDPOINT<br/><br/>

                            Secure a particular location as hardpoint
                            Kill the enemy in hardpoint and secure points
                            first team to reach 150 points wins the match
                            Time limit : 300 secs 
                </div>
                <h3 align="center">Battle Royal</h3>
                <div className="p-5">
                Scoring System**

                1 Kill = 1 Point<br/>

                Points at the end of the Match<br/>

                Placement<br/>

                Points<br/>

                    
                Placement<br/>

                Points<br/>

                1 - 20<br/>  
                2 - 15 <br/>  
                3 - 12 <br/>  
                4 - 10 <br/>  
                5 - 8  <br/>  
                6 - 7 <br/>   
                7 - 6 <br/>   
                8 - 5 <br/>   
                9 - 4 <br/>   
                10 - 3 <br/>  
                11 - 1<br/>
                12 - 1<br/>
                13 - 1<br/>
                14 - 1<br/>
                15 - 1<br/>
                16 - 0<br/>
                17 - 0<br/>
                18 - 0<br/>
                19 - 0<br/>
                20 - 0<br/>

                Tournament Maps<br/>

                Maps:  Classic<br/>
                </div>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/ZXuNekBebVb1qjEs9" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RuleCod