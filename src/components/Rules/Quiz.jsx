import React, { useState } from 'react'
import { Button, Collapse,  CardBody } from 'reactstrap'

const RulesQuiz = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="p-5">
        <div className="p-5"> 
        <div className="quizbg"></div>
        </div>
            <h1 align="center">
               Rules for Quiz 
            </h1>
            <div>
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>24<sup>th</sup> Febuary 2021 - to - 9<sup>th</sup> March 2021</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
                <ul>
                    <li>
                        Entry Fees: Free
                    </li>
                <li>Participants will be judged on the basis of points.
                </li>
                <li>5 different sets of questions will be there.</li>
                <li>Each set will consist of 7 questions.</li>
                <li>First Participants to hit the buzzer will be called to give answers and rest to remain silent.</li>
                <li>If any rule violent by any Participant strict action will be taken like direct elimination.</li>
                <li>Participants with most points and follow up will be awarded with winner and runner ups.</li>
                <li>Winner will be awarded a trophy, medal and Certificate.</li>
                </ul>
            </div>
        <div align="center" className="conatiner-fluid">
            <Button color="primary" onClick={toggle} id="toggle" style={{ marginBottom: '1rem' }}>
            Register
            </Button>
            <Collapse isOpen={isOpen} className="bg-dark">
                <CardBody className="bg-dark mx-auto">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfySq-XubwNocItr6Xk1S-IySN1KJHGXUDJ7q2U1G-Fc4KZ4A/viewform?embedded=true" 
                width="340" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </CardBody>
            </Collapse>
        </div>
        </div>
    )
}

export default RulesQuiz