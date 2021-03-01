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
                            <h2 className="pb-3"><b>Contact</b></h2>
                            <h4>
                            Mihir Panchal <br/>
                            7700983123
                            </h4>
                        </div>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="400">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">Webinar</h1>
                            <h2 className="pb-3"><b>Contact</b></h2>
                            <h4>
                                Izhar Sayed<br/>
                                908271010
                            </h4>
                        </div>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="300">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">E-Sports</h1>
                            <h2 className="pb-3"><b>Contact</b></h2>
                            <Row>
                                <Col className="img-fluid">
                                    <h4>
                                        Ketan Rathod<br/>
                                        8689905216
                                    </h4>
                                </Col>
                                <Col>
                                    <h4>
                                        Izhar Sayed<br/>
                                        9082751010
                                    </h4>
                                </Col>
                            </Row>
                        </div>
                        </Card>
                    </Col>
                </Row>
                <Row align="center" className="p-5">
                    <Col>
                    <div className="pb-5">
                    <a href="https://www.gmail.com"><i className="far fa-envelope fa-2x  text-white"></i><br/>Get in touch</a>
                    </div>
                    </Col>
                    <Col>
                    <div className="text-white">
                    <a className="" href="https://www.instagram.com/technova_slrtdc/">
                    <i className="fab fa-instagram fa-2x text-white"></i><br/>Like, Follow and Support on Instagram</a>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact