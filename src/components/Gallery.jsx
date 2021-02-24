import React from 'react'
import {Container, Row, Col, UncontrolledCarousel } from 'reactstrap'
import inaguration from '../img/fest/inaugration.jpg'
import odd_even from '../img/fest/odd_even_1.jpg'
import draw from '../img/fest/draw.jpg'
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
                    <Row>
                        <Col sm="5"><img className="img-fluid pb-2" src={inaguration} alt="inaugration" /></Col>
                        <Col sm="7"><UncontrolledCarousel items={items} /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Gallery