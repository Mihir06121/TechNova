import React, {useState} from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap'

const RuleCod = () => {
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
             <h1>Webinar</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>Date - to - Date</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
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