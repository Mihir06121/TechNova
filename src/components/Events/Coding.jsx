import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

const Technical = () => {
    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
            <Row>
                <Col md="6">
                    <h2 align="center">
                        Coding Contest
                    </h2>
                    <div align="center">
                    <h5>Timings</h5>
                    <h5>09:00 am</h5>
                    </div>
                </Col>
                <Col align="center" md="6">
                    <Link className="btn btn-primary" to="/rulescoding">Know More</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Technical