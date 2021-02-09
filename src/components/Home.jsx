import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './home.css'

const Home = () => {

    return (
        <div id="home" className="p-lg-5 bgwrapper">
            <div className="p-lg-5">
                <div className="pt-5">
                    <Jumbotron data-aos="fade-up" align="center" className="bg-t">
                        <h1 align="center" className="display-4 pt-5 pb-5"
                        data-aos="fade-up" data-aos-delay="300">TechNova-21</h1>
                        <h3 className="lead pt-5 pb-5"data-aos="fade-up" data-aos-delay="500">Tag Line</h3>
                        <hr className="my-2 bg-light mt-3 mb-3 pt-2" data-aos="flip-left" data-aos-delay="500" />
                        <p className="lead pt-5">
                        <Button color="primary">Get Started</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    )
}

export default Home