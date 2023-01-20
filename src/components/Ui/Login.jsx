import React from 'react'
import '../../style/login.css'
import { Form,Label,Input,Row,Col,FormGroup } from 'reactstrap'
const Login = () => {
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
            </Row>



            <Row>
            <Col md={12}>


                <FormGroup>
                    <Label for="exampleEmail" className='text '>
                        Password :-
                    </Label>
                    <Input

                        id="exampleEmail"
                        name="email"
                        placeholder="enter your password"
                        type="password"
                    />
                </FormGroup>
                <Row>
                        <Col md={12}>

                            <button className='login_button mt-3 '>
                                Login
                            </button>
                        </Col>
                    </Row>


            </Col>
            </Row>
            </Form>
            </div>




  )
}

export default Login