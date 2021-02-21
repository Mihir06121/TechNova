import React from 'react'
import { Card, Row, Col } from 'reactstrap';

const Contact = () => {
    return(
        <div align="center" id="contact" className="pt-5 pb-5">
            <div className="pt-5 pb-5">
                <h1>Contact</h1>
            </div>
            <div className="text-=white p-5">
                <Row className="bg-black">
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="200">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">Technical Day</h1>
                            <h3>Contact</h3>
                        </div>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="400">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">Webinar</h1>
                            <h3>Contact</h3>
                        </div>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="300">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">E-Sports</h1>
                            <h3>Contact</h3>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact