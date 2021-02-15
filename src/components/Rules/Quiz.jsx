import React from 'react'

const RulesQuiz = () => {
    let warn = "These are just dummy rules, some rules are yet to be changed. Stay Tuned!"
    alert(warn)
    return(
        <div className="p-5">
            <h1 align="center">
               Rules for Quiz 
            </h1>
            <div className="p-5">
                <ul className="p-5">
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
        </div>
    )
}

export default RulesQuiz