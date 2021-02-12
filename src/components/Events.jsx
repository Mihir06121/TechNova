import React, { useState } from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
// import { Button } from 'reactstrap';
import Technical from './Events/Coding'
import WebDesign from './Events/WebDesign'
import Debugging from './Events/Debugging'
import Quiz from './Events/Quiz'
import Webinar from './Events/Webinar';
import CallOfDuty from './Events/CallOfDuty';
import Valorent from './Events/Valorent';
import Csgo from './Events/Csgo';

const Events = () => {


    return(
        <div id="events" className="pt-5 pb-5">
            <div align="center" className="pt-5 pb-5">
                <h1>EVENTS</h1>
            </div>
            <div className="text-=white p-5">
                <Row className="bg-black">
                    <Col className="bg-t pt-3 pb-3" sm="4">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">Technical Day</h1>
                        </div>
                            <Technical /><hr className="bg-light m-2" />
                            <WebDesign /><hr className="bg-light m-2" />
                            <Debugging /><hr className="bg-light m-2" />
                            <Quiz /><hr className="bg-light m-2" />
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">Webinar</h1>
                        </div>
                        <Webinar />
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h1 className="pt-5 pb-5">E-Sports</h1>
                        </div>
                        <CallOfDuty />
                        <Valorent />
                        <Csgo />
                        </Card>
                    </Col>
                </Row>
            </div>
            
            
        </div>
    )
}

export default Events