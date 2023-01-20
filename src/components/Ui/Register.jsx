import React from 'react'
import '../../style/register.css'

import { Form, FormGroup, Button, Label, Row, Col, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
const Register = () => {
    return (






        <div className='form_container'>


            <Form className='form'>
                <Row>
                    <Col md={12}>


                        <FormGroup>
                            <Label for="exampleEmail" className='text '>
                                Email :-
                            </Label>
                            <Input

                                id="exampleEmail"
                                name="email"
                                placeholder="enter your email"
                                type="email"
                            />
                        </FormGroup>
                    </Col>

                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleEmail" className='text '>
                                    UserName :-
                                </Label>
                                <Input

                                    id="exampleEmail"
                                    name="text"
                                    placeholder="enter your name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>



                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleEmail" className='text'>
                                    FirstName :-
                                </Label>
                                <Input
                                    className='Input'
                                    id="exampleEmail"
                                    name="text"
                                    placeholder="enter your First name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col></Row>

                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleEmail" className='text '>
                                    LastName :-
                                </Label>
                                <Input

                                    id="exampleEmail"
                                    name="text"
                                    placeholder="enter your Last name"
                                    type="text"
                                />
                            </FormGroup>
                        </Col></Row>

                    <Row>
                        <Col md={12}>

                            <FormGroup>
                                <Label for="exampleEmail" className='text '>
                                    Phone Number :-
                                </Label>
                                <Input

                                    id="exampleEmail"
                                    name="text"
                                    placeholder="enter your phone number"
                                    type="text"
                                />
                            </FormGroup>
                        </Col></Row>


                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleEmail" className='text '>
                                    Password :-
                                </Label>
                                <Input

                                    id="exampleEmail"
                                    name="text"
                                    placeholder="enter your password"
                                    type="password"
                                />
                            </FormGroup>
                        </Col></Row>

                    {/* <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="exampleEmail" className='text '>
                                    UserType :-
                                </Label>
                                <select className='option'>
                                    <option >user type</option>
                                    <option>user</option>
                                    <option>Admin</option>
                                </select>

                            </FormGroup>
                        </Col></Row> */}

                    <Row>
                        <Col md={6}>

                            <button className='button'>
                                Register
                            </button>
                        </Col>

                        <Col md={6}>

                            <button className='button'>
                                <Link to="/login">Login</Link>
                                
                            </button>
                        </Col>
                    </Row>



                </Row>

            </Form>
        </div>
    )
}

export default Register