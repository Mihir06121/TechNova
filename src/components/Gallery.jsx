import React from 'react'
import {Container, Row, Col, UncontrolledCarousel } from 'reactstrap'
import inaguration from '../img/fest/inaugration.jpg'
import odd_even from '../img/fest/odd_even_1.jpg'
import draw from '../img/fest/draw.jpg'
import team2 from '../img/team/team2.jpg'
import team1 from '../img/team/team.jpg'
// import odd_even_1 from '../img/fest/odd_even_1.jpg'
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
    },
    {
        src: team1
    }
]

const items2 = [
    {
        src : jamkerakhnakadam,
    },
    {
        src: inaguration,
    },
    {
        src:team2
    }
]

const Gallery = () => {
    return(
        <div className="p-5">
            <h1 align="center"> Gallery</h1>
            <div className="">
                <Container className="themed-container" fluid={true}>
                    <h3 className="p-3" align="center">A Glimpse of TechNova 19-20</h3>
                    <Row>
                        <Col className="pb-3" sm="6"><UncontrolledCarousel items={items2} /></Col>
                        <Col sm="6"><UncontrolledCarousel items={items} /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Gallery