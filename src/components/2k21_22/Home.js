import React, {useEffect, useState} from 'react'
import AOS from'aos';
import { Link } from 'react-router-dom'
import '../../components/home.css'
import { Jumbotron, Collapse, Button } from 'reactstrap';
import { Card, Row, Col } from 'reactstrap';
import banner_1 from '../../img/2k21_22/banner_1.png'
import banner_2 from '../../img/2k21_22/experienceIt.png'
const Home = () => {

  useEffect (() => {
    AOS.init({
      duration: '1200'
    })
  },[])
  // const [isOpen1, setIsOpen1] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  const [value, setValue] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false 
  })

  const { isOpen1, isOpen2, isOpen3 } = value

  return (
    // <div className='container-fluid p-md-5'>
    //   <div className='pt-md-5 d-flex justify-content-center align-items-center'>
    //       <h1>TECHNOVA</h1>
    //   </div>
    //   <div className='pb-md-5 d-flex justify-content-center align-items-center'>
    //     <h3>2K21-22</h3>
    //   </div>
    // </div>
      <div>
        <div id="home" className="p-lg-5 bgwrapper">
          <div className="p-lg-5 bright">
              <div className=" container py-5">
                  <Jumbotron data-aos="fade-up" align="center" className="py-lg-5 bg-t">
                      {/* <h1 align="center" className="display-4 head-text pt-5 pb-5"
                      data-aos="fade-up" data-aos-delay="300"><strong>TechNova-21</strong></h1><br/> */}
                      <img className="img-fluid logo_img m-1" src={banner_1} alt="logo"></img>
                      
                    {/* <div className='py-md-5 d-flex justify-content-center align-items-center'>
                        <h1 className='display-1' style={{color: 'black',}}><strong>TECHNOVA</strong></h1>
                    </div> */}
                      {/* <h2 id="demo" data-aos="fade-up" data-aos-delay="700"><b></b></h2> */}
                      <div className='grad-bg'>
                        <h2 className="display-md-4 shadow-lg text-dark p-3" data-aos="fade-up" data-aos-delay="500"><strong>Experience IT</strong></h2>
                      </div>
                      <hr className="my-2 bg-light mt-3 mb-3 pt-2" data-aos="flip-left" data-aos-delay="500" />
                      <p className="lead pt-5">
                      {/* <Button color="primary" href="#about">Get Started</Button> */}
                      </p>
                  </Jumbotron>
              </div>
          </div>
        </div>
        <div className='py-lg-5'>
          <div className='p-md-5 p-3 d-flex justify-content-center align-items-center'>
              <h1>ABOUT TECHNOVA FEST</h1>
          </div>
          <div className='p-5'>
            <h3 className='justify-text p-md-5'>
              Technova fest is an initiative by departments of BSc.(IT) & BSc.(CS)
              of Shree L.R. Tiwari Degree College of Arts, Commerce and Science, Mira Road.
              Technova includes some mesmerizing events.<br/><br/>
              All the previous events of Technova fest was a grand success with amazing events, students experience awesomeness, 
              joy in every moment. This is a fest where you get to show off your
              spectacular skills in gaming, coding and other fun-loving events. <br /><br/>
              Technova will bring more mind-boggling events this year, which we are sure,
              you are waiting for, with much anticipation. <br/><br/>
              Keeping the current situation in mind for the well-being and safety of our 
              participants, we are introducing our event online i.e., contactless.
            </h3>
          </div>
        </div>
        <div className='py-md-5 px-3 py-3 conatainer-fluid'>
            <div className=''>
              <div className='d-flex justify-content-center align-items-center'>
              <h1>EVENTS</h1>  
              </div>
              <div className='row'>
                <div className='col-md'>
                <div style={{}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button color="primary" block onClick={() => {
                        setValue({isOpen1:true, isOpen2:false, isOpen3:false})
                    }}><h1>Day 1 (16th Feb 2022)</h1></Button>
                  </div>
                  <div className='p-3'>
                    <Collapse isOpen={!isOpen1}>
                        <div className='border rounded-lg p-3'>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                              <Link className="" to="/rulescoding">CODING</Link>
                              </a>
                            </h2>
                            {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Time: 09:00 AM<br/>
                                  <Link className="btn btn-primary" to="/rulescoding">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesdebugging">DEBUGGING</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Time: 10:00 AM<br/>
                                <Link className="" to="/rulesdebugging">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesuidesign">UI DESIGN</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Time: 12:00 PM<br/>
                                  <Link className="" to="/rulesuidesign">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesquiz">QUIZ</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Time: 11:00 AM<br/>
                                  <Link className="" to="/rulesquiz">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                        </div>
                        </div>
                    </Collapse>
                  </div>
                </div >
                </div>
                <div className='col-md'>
                <div style={{}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button color="primary" block onClick={() => {
                        setValue({isOpen1:false, isOpen2:true, isOpen3:false})
                    }}><h1>Day 2 (17th Feb 2022)</h1></Button>
                  </div>
                  <div className='p-3'>
                    <Collapse isOpen={!isOpen2}>
                        <div className='border rounded-lg p-3'>
                        <div className="accordion" id="accordionExample1">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesstandupcomedy">STAND-UP COMEDY</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Time: 08:00 AM<br/>
                                  <Link className="" to="/rulesstandupcomedy">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTen">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesechess">E-CHESS</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseTen" className="accordion-collapse collapse show" aria-labelledby="headingTen" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Time: 09:00 AM<br/>
                                  <Link className="" to="/rulesechess">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesdigitalposter">DIGITAL POSTER MAKING</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Time: 10:30 AM<br/>
                                  <Link className="" to="/rulesdigitalposter">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEight">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/registerwebinar">LEARN WITH US</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Time: 12:00 PM<br/>
                                  <Link className="btn btn-primary" to="/registerwebinar">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                        </div>
                        </div>
                    </Collapse>
                  </div>
                </div >
                </div>
                <div className='col-md'>
                <div style={{}}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button color="primary" block onClick={() => {
                        setValue({isOpen1:false, isOpen2:false, isOpen3:true})
                    }}><h1>Day 3 (18th Feb 2022)</h1></Button>
                  </div>
                  <div className='p-3'>
                    <Collapse isOpen={!isOpen3}>
                        <div className='border rounded-lg p-3'>
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesbgmi">BGMI</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Time: 24 Hrs<br/>
                                  <Link className="" to="/rulesbgmi">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulescod">CALL OF DUTY: MOBILE</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Time: 24 Hrs<br/>
                                  <Link className="" to="/rulescod">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingNine">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesValorant">VALORANT</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Time: 24 Hrs<br/>
                                  <Link className="" to="/rulesValorant">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesclashroyale">CLASH ROYALE</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Time: 01:00 PM<br/>
                                  <Link className="" to="/rulesclashroyale">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                            <a style={{background:"transparent", cursor: "pointer"}} className=" border-0 text-white">
                            <Link className="" to="/rulesfreefire">FREE-FIRE</Link>                     
                              </a>
                            </h2>
                            {/* <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Time: 10:00 AM<br/>
                                  <Link className="" to="/rulesfreefire">Know More</Link>                     
                              </div>
                            </div> */}
                          </div>
                        </div>
                        </div>
                    </Collapse>
                  </div>
                </div >
                </div>
              </div>
            </div>
            {isOpen1 || isOpen2 || isOpen3 ? <div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button color="danger" onClick={() => {
                        setValue({isOpen1:false, isOpen2:false, isOpen3:false})
                    }}>Close</Button>
                  </div>
            </div>: null}
        </div>
        <div className='py-md-5 conatainer-fluid'>
          <div className='d-flex justify-content-center align-items-center'>
              <h1>Contact</h1>
          </div>
            <div className=''>
                <Row className="bg-black">
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="200">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h4>
                            Inamul Hasan <br/>
                            7977710148
                            </h4>
                        </div>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="400">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h4>
                                Md. Irfan<br/>
                                9136375005
                            </h4>
                        </div>
                        </Card>
                    </Col>
                    <Col className="bg-t pt-3 pb-3" sm="4" data-aos="flip-up" data-aos-delay="300">
                        <Card className="bg-dark" body>
                        <div align="center" className="pt-5 pb-5">
                            <h4>
                                Raj Vishwakarma<br/>
                                9324571667
                            </h4>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
        <div className='py-md-5 conatainer-fluid'>
            <div className='d-flex justify-content-center align-items-center'>
              <h4 align='center'>Designed and Developed By <a href='https://www.mihirpanchal.com' target='_blank'>Mihir Panchal</a></h4 >
            </div>
        </div>
      </div>
  )
}

export default Home