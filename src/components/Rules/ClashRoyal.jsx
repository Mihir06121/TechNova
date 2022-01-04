import React, {useState} from 'react'
import { Button } from 'reactstrap'

const RulesCoding = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

 return(
     <div className="pt-lg-5 pb-lg-3">
     <div className="p-lg-5"> 
     <div className="clashRoyalebg"></div>
     </div>
         <div align="center" className="p-lg-5 p-3">
             <h1>Clash Royale</h1>
         </div>
        <div className="pt-3 pb-5">
            <div className="p-5">
                <div align="center" className="p-3">
                    {/* <h2>Registration Dates</h2>
                    <h2>24<sup>th</sup> Febuary 2021 - to - 9<sup>th</sup> March 2021</h2>
                    <h3>Late registration will not be entertained</h3> */}
                </div>
            <h2 align="center" className="pb-3">RULES ARE YET TO BE ADD</h2>
            </div>
        </div>
        {/* <div align="center" className="conatiner-fluid">
        <Button color="primary"><a href="https://forms.gle/6SPXiejR1FReKWD58" className="btn btn-primary">Register</a></Button>
        </div> */}
     </div>
 )
}

export default RulesCoding