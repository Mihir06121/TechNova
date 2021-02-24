import React from 'react'
import hemant from '../img/team/hemant.jpg'
import izhar from '../img/team/izhar.jpg'
import shetty from '../img/team/shetty.jpg'
import jitu from '../img/team/jitu.png'
import { Row, Col } from 'reactstrap'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Team = () => {
    return(
        <div id="team" className="pt-5 pb-5">
            <div align="center" className="pt-5 pb-5">
                <h1>The Team</h1>
            </div>
            <Row className="p-4">
                <Col>
                    <div align="center">
                    <Card className="bg-dark">
                        <CardImg align="center" className="p-1 team_img" top width="10px" src={hemant} alt="Card image cap" />
                        <h1>Hemant Singh</h1>
                    </Card>
                    </div>
                </Col>
                <Col>
                    <div align="center">
                    <Card className="bg-dark">
                        <CardImg align="center" className="p-1 img-fluid team_img" top width="10px" src={jitu} alt="Card image cap" />  
                        <h1>Hemant Singh</h1>

                    </Card>
                    </div>
                </Col>
                <Col>
                    <div align="center">
                    <Card className="bg-dark">
                        <CardImg align="center" className="p-1 img-fluid team_img" top width="10px" src={jitu} alt="Card image cap" />
                        <h1>Jitendra</h1>
                    </Card>
                    </div>
                </Col>
                <Col>
                    <div align="center">
                    <Card className="bg-dark">
                        <CardImg align="center" className="p-1 img-fluid team_img" top width="10px" src={jitu} alt="Card image cap" />
                        <h1>Hemant Singh</h1>
                    </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Team