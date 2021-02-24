import React, {useState} from 'react'
import { Button, CardBody, Collapse } from 'reactstrap'

const RuleCod = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

 return(
     <div className="pt-5 pb-3">
     <div className=""> 
     <div className="webbg"></div>
     </div>
         <div align="center" className="pt-1">
             <h1>Web Design</h1>
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
                            Upload your file in .zip format, uploading files separately will not be counted.
                        </li>
                        <li>
                            Website must be responsive and should run in any browser.
                        </li>
                        <li>
                            Paricipants will be disqualified for using or adding offensive contents in webpages or whatsapp group.
                        </li>
                        <li>
                            Links for submitting your site will be povided in Google Meet
                        </li>
                        <li>
                            The website you created should include your name and registered mail-d at the end. If mail-id dosen't match your registered mail-id you may get disqualified.
                        </li>
                        <li>
                            Do not leave the whatsapp group until the result is declared or you may loose the winning award.
                        </li>
                        <li>
                            Winner will be awarded with Certificate.
                        </li>
                        
                        <h2 align="center">Impotant</h2>
                        <li>
                        For Coding contest you need to have account in Codechef or else won't be able to participate. 
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

export default RuleCod