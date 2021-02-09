import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap';
import "../components/home.css"

const Home= () => {
    return (
        <div className="pt-5 bgimage">
            <Jumbotron fluid className="bg-t">
                <Container fluid className="text-white">
                    <h1 className="display-4"><strong>TechNova-21</strong></h1>
                    <p className="lead">TagLine</p>
                </Container>
            </Jumbotron>
            <Button color="primary" size="lg">Large Button</Button>
        </div>
    )
}

export default Home