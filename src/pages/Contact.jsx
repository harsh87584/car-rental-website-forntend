import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import CommonSection from '../components/Ui/CommonSection'
import '../style/contact.css'
const Contact = () => {

    const socialLinks = [
        {
            url: "https://www.semicolonsolution.com/",
            icon: "ri-facebook-line",
        },
        {
            url: "https://www.semicolonsolution.com/",
            icon: "ri-instagram-line",
        },
        {
            url: "https://www.semicolonsolution.com/",
            icon: "ri-linkedin-line",
        },
        {
            url: "https://www.semicolonsolution.com/",
            icon: "ri-twitter-line",
        },
    ];


    return <div title='Contact'>
        <CommonSection title='Contact' />
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className="fw-bold mb-4">Get In Touch</h6>

                        <Form>
                            <FormGroup className='contact_form'>
                                <Input placeholder='Your Name' type='text' required></Input>
                            </FormGroup>

                            <FormGroup className='contact_form'>
                                <Input placeholder='Email' type='email' required></Input>
                            </FormGroup>

                            <FormGroup className='contact_form'>
                                <textarea rows="5" placeholder='Message' className='textarea'></textarea>
                            </FormGroup>

                            <button className='contact_btn' type='submit'>Send Message</button>

                        </Form>
                    </Col>

                    <Col lg='5' md='5'>
                        <div className="contact_info mt-3">
                            <h6 className="fw-bold">Contact Information :-</h6>
                            <p className="section_description mb-0">
                                123,atlanta mall,surat
                            </p>

                            <div className="d-flex align-items-center gap-2">
                                <h6 className='section_description1 mb-0 '>Phone:</h6>
                                <p className="section_description mb-0 ">+91-123-4567-890</p>
                            </div>


                            <div className="d-flex align-items-center gap-2">
                                <h6 className='mb-0 section_description1'>Email:</h6>
                                <p className="section_description mb-0 ">example@gmail.com</p>
                            </div>

                            <h6 className="fw-bold mt-4">Follow Us</h6>
                            <div className='d-flex align-items-center gap-4 mt-3'>
                                {socialLinks.map((item, index) => (
                                    <a
                                        href={item.url}
                                        key={index}
                                        className="social_link-icon"
                                        target='__blank'
                                    >
                                        <i class={item.icon}></i>
                                    </a>
                                ))}
                                {/* <a href='https://www.facebook.com/'>
                                <i class='ri-facebook-line'></i>
                                   
                                </a> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div >

}

export default Contact