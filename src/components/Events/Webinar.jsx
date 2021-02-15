import React from 'react'
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

const Webinar = () => {

    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
            <h2 align="center">
                Webinar Event
            </h2>
            <Card className="bg-dark">
                <CardBody style={{textAlign:"left"}}>
            <p>TechNova an initiative by Bsc.IT & Bsc.CS Department of 
                Shree L.R. Tiwari Degree College of Arts, Commerce & Science is providing 1-Day hand on virtual practice on 
                Artificial Intelligence Workshop absolutely free. The motive behind is to provide Some basic knowledge about Artificial Intelligence.
                Artificial intelligence is based on the principle that human intelligence 
                can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. 
                The goals of artificial intelligence include learning, reasoning, and perception.
                <br/><br/>
                Date: 12th March 2020
                Timing: 10:00 am
                <br/><br/>
                Note: Participants will be awarded with Certificate

                </p>
                </CardBody>
                <div align="center" className="pt-4 pb-4">
                    <Link className="btn btn-primary" to="/registerwebinar/">Register YourSelf</Link>
                </div>
            </Card>
        </div>
    )
}

export default Webinar