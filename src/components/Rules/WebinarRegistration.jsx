import React, {useState} from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap'

const RuleCod = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

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
        <a href="https://forms.gle/CHZkvrMk7F2Wdcwu6" className="btn btn-primary">Register</a>
        </div>
     </div>
 )
}

export default RuleCod