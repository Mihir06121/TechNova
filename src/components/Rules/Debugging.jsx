import React, {useState} from 'react'
import { Button, CardBody, Collapse } from 'reactstrap'

const RulesDebugging = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

 return(
     <div className="pt-5 pb-3">
     <div className="p-5"> 
     <div className="debbg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>Debugging</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>24<sup>th</sup> Febuary 2021 - to - 9<sup>th</sup> March 2021</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
                <p>
                    <ul>
                        <li>
                            By Participating in our events, all participants already agree that they vow to respect the fellow participants and team behind this events.
                        </li>
                        <li>
                            Use of USB drives is strictly prohibited 
                        </li>
                        <li>
                            Entry fees: free
                        </li>
                        <li>
                            Participants are required to solve the problem in given time to move to pre-elimination round.
                        </li>
                        <li>
                            Last 2 Participants will be eliminated.
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
                    </ul>
                </p>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/c3FvzCudPZWoHbhi6" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesDebugging