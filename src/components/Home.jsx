import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './home.css'
import logo from '../img/logo.png'

const Home = () => {

    return (
        <div id="home" className="p-lg-5 bgwrapper">
            <div className="p-lg-5 bright">
                <div className=" container pt-5">
                    <Jumbotron data-aos="fade-up" align="center" className="bg-t">
                        {/* <h1 align="center" className="display-4 head-text pt-5 pb-5"
                        data-aos="fade-up" data-aos-delay="300"><strong>TechNova-21</strong></h1><br/> */}
                        <img className="img-fluid logo_img m-1" src={logo} alt="logo"></img>
                        <h3 className="lead pt-5 pb-5 display-4" data-aos="fade-up" data-aos-delay="500">Exprience IT</h3>
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