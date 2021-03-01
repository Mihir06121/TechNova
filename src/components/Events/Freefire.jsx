import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Button, Col } from 'reactstrap';

const freefire = () => {

    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
        <Row>
            <Col md="6">
                <h2 align="center">
                    Free Fire
                </h2>
                    <div align="center">
                    <h5>Timings</h5>
                    <h5>01:00 pm</h5>
                    </div>
            </Col>
            <Col align="center" md="6">
                    <Link className="btn btn-primary" to="/rulesfreefire">Know More</Link>
                    {/* <Button color="primary"><a href="https://forms.gle/ZivGCsSUzhhpXkEN7" className="btn btn-primary">Register</a></Button> */}
            </Col>
        </Row> 
        </div>
    )
}

export default freefire