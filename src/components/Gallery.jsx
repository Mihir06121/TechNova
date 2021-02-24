import React from 'react'
import {Container, Row, Col, UncontrolledCarousel } from 'reactstrap'
import inaguration from '../img/fest/inaugration.jpg'
import odd_even from '../img/fest/odd_even_1.jpg'
import draw from '../img/fest/draw.jpg'
import odd_even_1 from '../img/fest/odd_even_1.jpg'
import jamkerakhnakadam from '../img/fest/jamkerakhnakadam.jpg'
import coding_contest from '../img/fest/coding-contest.jpg'

const items = [
    {
        src : odd_even,
    },
    {
        src:draw,
    },
    {
        src: coding_contest,
    }
]

const Gallery = () => {
    return(
        <div className="p-5">
            <h1 align="center"> Gallery</h1>
            <div className="">
                <Container className="themed-container" fluid={true}>
                    <h3 className="p-3" align="center">A Glimpse of TechNova2K19</h3>
                    <Row>
                        <Col sm="5"><img className="img-fluid pb-2" src={inaguration} alt="inaugration" /></Col>
                        <Col sm="7"><UncontrolledCarousel items={items} /></Col>
                    </Row>
                    <Row>
                        <Col className="p-3" sm="6"><img className="img-fluid pb-2" src={odd_even_1} alt="inaugration" /></Col>
                        <Col className="p-3" sm="6"><img className="img-fluid pb-2" src={jamkerakhnakadam} alt="inaugration" /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Gallery