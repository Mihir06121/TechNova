import React, {useState} from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap'

const RuleCod = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
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
                    <h2>24<sup>th</sup> Febuary 2021 - to - 9<sup>th</sup> March 2021</h2>
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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3n4m5NyFF064Ka8NxnhVhODBBnHAd_jS2BuX4HUZ1Qd3Urw/viewform?embedded=true" 
                width="340" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </CardBody>
            </Collapse>
        </div>
     </div>
 )
}

export default RuleCod