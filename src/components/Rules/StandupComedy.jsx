import React, {useState} from 'react'
import { Button } from 'reactstrap'

const RulesCoding = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-5 pb-3">
     <div className="p-5"> 
     <div className="standupcomedybg"></div>
     </div>
         <div align="center" className="pt-5">
             <h1>STAND-UP COMEDY</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    <h2>Registration Dates</h2>
                    <h2>12<sup>th</sup> January 2022 - to - 13<sup>th</sup> February 2022</h2>
                    <h3>Late registration will not be entertained</h3>
                </div>
            <h2 align="center" className="pb-3">General Rules</h2>
            <ul>
                <li>
                No abusive words allowed.</li>
                <li>

Participants should maintain the Moral values and avoid hurting the sentiments of the audience.</li>
                <li>

The decision taken by the judges will be final.</li>
                <li>

If the participant caught using any abusive words in the show, the participant will be disqualified.</li>
                <li>

Final decision will be taken by organising committee.
                </li>
            </ul>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/yaHM3Wdvdqy6s9UZ9" className="btn btn-primary">Register</a></Button>
        </div>
     </div>
 )
}

export default RulesCoding