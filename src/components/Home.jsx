import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './home.css'

const Home = () => {

    return (
        <div id="home" className="p-lg-5 bgwrapper">
            <div className="p-lg-5">
                <div className="pt-5">
                    <Jumbotron align="center" className="bg-t">
                        <h1 align="center" className="display-4"
                        data-aos="fade-up" data-aos-delay="300">TechNova-21</h1>
                        <p className="lead">Tag Line</p>
                        <hr className="my-2 bg-light" />
                        <p className="lead pt-5">
                        <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    )
}

export default Home