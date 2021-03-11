import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './home.css'
import logo from '../img/logo.png'

const Home = () => {

//             // Set the date we're counting down to
// var countDownDate = new Date("March 11, 2021 08:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

    return (
        <div id="home" className="p-lg-5 bgwrapper">
            <div className="p-lg-5 bright">
                <div className=" container pt-5">
                    <Jumbotron data-aos="fade-up" align="center" className="bg-t">
                        {/* <h1 align="center" className="display-4 head-text pt-5 pb-5"
                        data-aos="fade-up" data-aos-delay="300"><strong>TechNova-21</strong></h1><br/> */}
                        <img className="img-fluid logo_img m-1" src={logo} alt="logo"></img>
                        {/* <h2 id="demo" data-aos="fade-up" data-aos-delay="700"><b></b></h2> */}
                        <h3 className="lead pt-5 pb-5 display-4" data-aos="fade-up" data-aos-delay="500">Experience IT</h3>
                        <hr className="my-2 bg-light mt-3 mb-3 pt-2" data-aos="flip-left" data-aos-delay="500" />
                        <p className="lead pt-5">
                        <Button color="primary" href="#about">Get Started</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    )

}

export default Home