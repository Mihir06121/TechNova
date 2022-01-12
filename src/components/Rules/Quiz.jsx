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
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
                <ul>
                    <li>
                        Entry Fees: Free
                    </li>
                <li>By Participating in our events, all participants already agree that they vow to respect the fellow participants and team  behind this events. 
                </li>
                <li>
                Participants will be judged on the basis of points. 
                </li>
                <li>
                    5 different sets of questions will be there.  
                </li>
                <li>Each set will consist of 10 questions. 
                </li>
                <li>
                    First Participants to answer in WhatsApp will get a point. 
                </li>
                <li>
                    If any rule violated by any Participant strict action will be taken like direct elimination. 
                </li>
                <li>
                    Participants with most points and follow up will be awarded with winner and runner ups. 
                </li>
                <li>
                    Winner will be awarded with a Certificate.
                </li>
                </ul>
            </div>
        <div align="center" className="conatiner-fluid">
        <a href="https://forms.gle/EXRXB2KJrZynnqGj8" className="btn btn-primary">Register</a>
        </div>
        </div>
    )
}

export default RulesQuiz