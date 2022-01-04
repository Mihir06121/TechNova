import React, {useEffect, useState} from 'react'
import AOS from'aos';
import { Link } from 'react-router-dom'
import '../../components/home.css'
import { Jumbotron, Collapse, Button, CardBody, Card } from 'reactstrap';

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
                      {/* <img className="img-fluid logo_img m-1" src={logo} alt="logo"></img> */}
                      
                    <div className='py-md-5 d-flex justify-content-center align-items-center'>
                        <h1 className='display-4'>TECHNOVA</h1>
                    </div>
                      {/* <h2 id="demo" data-aos="fade-up" data-aos-delay="700"><b></b></h2> */}
                      <h3 className="lead pt-5 pb-5 display-4" data-aos="fade-up" data-aos-delay="500">Experience IT</h3>
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
                    }}><h1>Day 1</h1></Button>
                  </div>
                  <div className='p-3'>
                    <Collapse isOpen={isOpen1}>
                        <p>I am sample Text to display</p>
                        <div className='border rounded-lg p-3'>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button border-0 text-white" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                CODING
                              </a>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulescoding">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                DEBUGGING
                              </a>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Date: <br/>
                                <Link className="btn btn-primary" to="/rulesdebugging">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                UI DESIGING
                              </a>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulesuidesign">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                QUIZ
                              </a>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulesquiz">Know More</Link>                     
                              </div>
                            </div>
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
                    }}><h1>Day 2</h1></Button>
                  </div>
                  <div className='p-3'>
                    <Collapse isOpen={isOpen2}>
                        <p>I am sample Text to display</p>
                        <div className='border rounded-lg p-3'>
                        <div className="accordion" id="accordionExample1">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                STAND-UP COMEDY
                              </a>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulesstandupcomedy">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTen">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                Chess
                              </a>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse show" aria-labelledby="headingTen" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulesechess">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeven">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                DIGITAL-POSTER MAKING
                              </a>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulesdigitalposter">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEight">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                WEBINAR
                              </a>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample1">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/registerwebinar">Know More</Link>                     
                              </div>
                            </div>
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
                    }}><h1>Day 3</h1></Button>
                  </div>
                  <div className='p-3'>
                    <Collapse isOpen={isOpen3}>
                        <p>I am sample Text to display</p>
                        <div className='border rounded-lg p-3'>
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                BGMI
                              </a>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulesbgmi">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                CALL OF DUTY: MOBILE
                              </a>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                Date: <br/>
                                  <Link className="btn btn-primary" to="/rulescod">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingNine">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                VALORANT
                              </a>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                  <Link className="btn btn-primary" to="/rulesValorant">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Clash Royale
                              </a>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                  <Link className="btn btn-primary" to="/rulesclashroyale">Know More</Link>                     
                              </div>
                            </div>
                          </div>
                          <hr className="bg-light" />

                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <a style={{background:"transparent", cursor: "pointer"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                FREE-FIRE
                              </a>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                              <div className="accordion-body">
                                  <Link className="btn btn-primary" to="/rulesfreefire">Know More</Link>                     
                              </div>
                            </div>
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
        <div className='py-md-5 conatainer-fluid bg-warning'>
            <div className='d-flex justify-content-center align-items-center'>
              <h1>Contact</h1>
            </div>
        </div>
        <div className='py-md-5 conatainer-fluid bg-danger'>
            <div className='d-flex justify-content-center align-items-center'>
              <h1>Designed and Developed By Team Technova</h1>
            </div>
        </div>
      </div>
  )
}

export default Home