import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

const CallOfDuty = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
            <h2 align="center">
                Call Of Duty
            </h2>
            <div>
        
            </div>
            <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card className="bg-dark">
                        <CardBody style={{textAlign:"left"}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        </CardBody>
                    </Card>
                    <Link className="btn btn-primary" to="rulescod">Know More</Link>
                        <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
            </Collapse> 
        </div>
    )
}

export default CallOfDuty