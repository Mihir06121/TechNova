import React, {useState} from 'react'
import { Button } from 'reactstrap'

const RulesCoding = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-5 pb-3">
     <div className="p-5"> 
     <div className="codingbg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>Coding Contest</h1>
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
                            By Participating in our events, all participants already agree that they vow to respect the fellow participants and team behind this events.
                        </li>
                        <li>
                            Entry fees: free
                        </li>
                        <li>
                            Coding Contest will be held on Hackerrank <a href="https://www.hackerrank.com/">(hackerrank.com)</a>
                        </li>
                        <li>
                            Participants must have account in Hackerrank
                        </li>
                        <li>
                            Participants are required to solve the problem in given time to move to pre-elimination round.
                        </li>
                        <li>
                        There will be 2 levels, further details will be provided to the earliest. 
                        </li>
                        <li>
                            It is a tournament in which Participants will compete to each others.
                        </li>
                        <li>
                            Do not leave the whatsapp group until the result is declared or you may loose the winning award.
                        </li>
                        <li>
                            Participants who will solve the problem correctly will be awarded as winner and follow up will be runner ups.
                        </li>
                        <li>
                            Winner will be awarded with a Certificate.
                        </li>
                        <li>
                        Final decision will be taken by organising committee. 
                        </li>
                        <li>
                        Participants will be selected on bases of test cases passed and time constraint. Elimination will be held dynamically.
                        </li>
                        <li>
                        Futher Details or changes will be shared on whatsapp group.
                        </li>
                        
                            <h2 align="center">Impotant</h2>
                            <li>
                            For Coding contest you need to have account in Hackerrank or else won't be able to participate. 
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/WiWuW4HXeNNeRDf86" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesCoding