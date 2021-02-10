import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

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
                        <CardTitle tag="h5">Day One</CardTitle>
                        <CardText>Contents for the Events</CardText>
                        <Button>Register Your Self</Button>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4">
                        <Card className="bg-dark" body>
                        <CardTitle tag="h5">Day Two</CardTitle>
                        <CardText>Contents for the Events</CardText>
                        <Button>Register Your Self</Button>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4">
                        <Card className="bg-dark" body>
                        <CardTitle tag="h5">Day Three</CardTitle>
                        <CardText>Contents for the Events</CardText>
                        <Button>Register Your Self</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Events