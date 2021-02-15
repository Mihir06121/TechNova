import React, {useState} from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap'

const RulesDebugging = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    let warn = "These are just dummy rules, some rules are yet to be changed. Stay Tuned!"
    alert(warn)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

 return(
     <div className="pt-5 pb-3">
         <div align="center" className="pt-5">
             <h1>Debugging</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>Date - to - Date</h2>
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
                            Coding Contest will be held on CodeChef (codechef.com)
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
                            Participants who will solve the problem correctly then others will be awarded as winner and follow up will be runner ups.
                        </li>
                        <li>
                            Winner will be awarded with Trophy, medal & Certificate.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
            <Button color="primary" onClick={toggle} id="toggle" style={{ marginBottom: '1rem' }}>
            Register
            </Button>
            <Collapse isOpen={isOpen} className="bg-dark">
                <CardBody className="bg-dark mx-auto">
                <iframe className="" src="https://docs.google.com/forms/d/e/1FAIpQLSeRQeJEh9q8T-tOTWELNlUSYp2GiYy-7PZSsmjad8gz6GwgTQ/viewform?embedded=true" 
                width="340" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </CardBody>
            </Collapse>
        </div>
     </div>
 )
}

export default RulesDebugging