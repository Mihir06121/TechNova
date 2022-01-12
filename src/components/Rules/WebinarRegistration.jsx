import React, {useState} from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap'

const RuleCod = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-5 pb-3">
        <div className="p-5"> 
            <div className="webinarbg"></div>
        </div>
         <div align="center" className="pt-5">
             <h1>Learn With US</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
            <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
            <p>
                <ul>
                    <li>
                    A Webinar/ Workshop will be organized by Team Technova.
                    </li>
                    <li>

Get a chance to be a part of Webinar conducted by one of the best speaker of NIIT.
                    </li>
                    <li>

E-Certificate will be provided to all participants.
                    </li>
                    <li>

Platfrom of Workshop/ Webinar is YouTube.
                    </li>
                    <li>

Link for Workshop/ Webinar will be provided in the WhatsApp group that participant’s will be required to join after registering themselves.

                    </li>
                </ul>
            </p>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <a href="https://forms.gle/34jsxHfQYS3xHaTn6" className="btn btn-primary">Register</a>
        </div>
     </div>
 )
}

export default RuleCod