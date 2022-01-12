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
             <h1>DIGITAL-POSTER MAKING</h1>
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
                File Size: Maximum file size is 4 Megabytes (4MB) Theme of the posters is:	Digital India (For round 1).
                </li>
                <li>
                    Each participant should submit one entry only before 30th Jan 2021. 
                </li>
                <li>
                    Winners will be decided on the basis of Likes & Comments on Social Media Account.
                </li>
                <li>
                    All poster entries must include the aforementioned theme or a related creative quotation in English or Hindi.
                </li>
                <li>
                    Participant name or identifying mark must not appear on the E- Poster.
                </li>
                <li>
                    All E-Poster should be original work of participant.
                </li>
                <li>
                    Any participant found violating rules and regulation will be disqualified from competition.
                </li>
                <li>
                    Participants for Round 2 rules and information will be provided in the WhatsApp Group.
                </li>
                <li>
                    Decision of jury will be considered final
                </li>
            </ul>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/gKCd121nLkLeTw8a7" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesCoding