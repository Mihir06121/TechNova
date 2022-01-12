import React from 'react'


const RuleCod = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
 return(
     <div className="pb-3">
     <div className="p-lg-5"> 
     <div className="webbg"></div>
     </div>
         <div align="center">
             <h1>UI Design</h1>
         </div>
        <div className="pb-5">
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
                            By Participating in our events, all participants already agree that they vow to respect the fellow participants and team behind this events.
                        </li>
                        <li>
                            Use of USB drives is strictly prohibited 
                        </li>
                        <li>
                        Participants will be disqualified for using or adding offensive contents in UI components, on going event or whatsapp group.
                        </li>
                        <li>
                        Figma and draw.io will be the platforms that are going to use to design UI, if the participants found using other platforms will be disqualified on the spot.
                        </li>
                        <li>
                        There will be 2 levels, further details will be provided to the earliest.
                        </li>
                        <li>
                            Links for submitting your site will be povided in Google Meet
                        </li>
                        <li>
                        On the event day participants needs to join either Google meet or zoom meet details for the same will also be provided in WhatsApp group                        </li>
                        <li>
                        Final decision will be taken by organising committee.
                        </li>
                        
                    </ul>
                </p>
            </div>
        </div>
        <div align="center" className="conatiner-fluid">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeACh_qGQSrh_K3z114dGtZmUsL1DWJNhWoZoULLKqv5jMHYg/viewform" className="btn btn-primary">Register</a>
        </div>
     </div>
 )
}

export default RuleCod