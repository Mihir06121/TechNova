import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

const Quiz = () => {

    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
        <Row>
            <Col md="6">
                <h2 align="center">
                    Quiz
                </h2>
                    <div align="center">
                    <h5>Timings</h5>
                    <h5>02:00 pm</h5>
                    </div>
            </Col>
            <Col align="center" md="6">
                    <Link className="btn btn-primary" to="/rulesquiz/">Know More</Link>
            </Col>
        </Row>
        </div>
    )
}

export default Quiz