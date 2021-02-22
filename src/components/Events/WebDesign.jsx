import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';

const WebDesign = () => {
    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
        <Row>
            <Col md="6">
                <h2 align="center">
                    Web Design
                </h2>
            </Col>
            <Col align="center" md="6">
                    <Link className="btn btn-primary" to="/ruleswebdesign">Know More</Link>
            </Col>
        </Row>
        </div>
    )
}

export default WebDesign