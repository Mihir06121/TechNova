import React, { useState } from 'react'
import { Button, Collapse,  CardBody } from 'reactstrap'

const RulesQuiz = () => {
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
                <li>If any rule violate by any Participant strict action will be taken like direct elimination.</li>
                <li>Participants with most points and follow up will be awarded with winner and runner ups.</li>
                <li>Winner will be awarded a Certificate.</li>
                </ul>
            </div>
        <div align="center" className="conatiner-fluid">
        <a href="https://forms.gle/2HE5wmYZt4TcDaH66" className="btn btn-primary">Register</a>
        </div>
        </div>
    )
}

export default RulesQuiz