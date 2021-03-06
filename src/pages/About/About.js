import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Shared/Header/Header.css';

const About = () => {
    return (
        <div className="bg-semilight">
            <div style={{ background:`radial-gradient(transparent, black), url('./images/banner/Bg.jpg') no-repeat top center fixed`, backgroundSize:'cover', height:"181px", backgroundBlendMode: 'saturation' }}>
                    <div style={{ background:"rgba(0,0,0,0.77)", height:"100%" }} className="text-center d-flex justify-content-center align-items-center">
                        <div className="w-50 px-4 py-3 text-light"><h1>About</h1></div>
                </div>
            </div>
            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h1 className="title-text my-4">About <span className="brand">HealthCare</span></h1>
                            <p><span className="brand">HelthCare</span> is a health facility that is primarily focused on the care of outpatients. Clinics can be privately operated or publicly managed and funded. They typically cover the primary care needs of populations in local communities, in contrast to larger hospitals which offer more specialised treatments and admit inpatients for overnight stays.
                            <br /><br />
                            Most commonly, the English word clinic refers to a general practice, run by one or more general practitioners offering small therapeutic treatments, but it can also mean a specialist clinic. Some clinics retain the name "clinic" even while growing into institutions as large as major hospitals or becoming associated with a hospital or medical school.</p>

                            <div className="d-flex flex-wrap justify-content-start mt-5 mb-2 text-center">
                                <div className="me-3">
                                <p className="brand mb-1"><strong>200000+</strong></p>
                                <p className="text-highname">Patients Satisfied</p>
                                </div>

                                <div className="ms-md-3">
                                <p className="brand mb-1"><strong>12000+</strong></p>
                                <p className="text-highname">Phychologists</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div>
                            <img className="w-100 mt-md-0 mt-3" src="./images/about/about.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;