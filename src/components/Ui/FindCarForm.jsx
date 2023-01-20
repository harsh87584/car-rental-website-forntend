import React from 'react'
import "../../style/find-car-form.css";
import "../../style/find-car-form.css";
import { Form, FormGroup } from 'reactstrap';

const FindCarForm = () => {
    return <Form className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap main'>
            <FormGroup className='form_group'>
                <input type='text' placeholder='From address' required />
            </FormGroup>

            <FormGroup className='form_group'>
                <input type='text' placeholder='To address' required />
            </FormGroup>

            <FormGroup className='form_group'>
                <input type='date' placeholder='journey date' required />
            </FormGroup>

            <FormGroup className='form_group'>
                <input className='journey_time' type='time' placeholder='journey time' required />
            </FormGroup>

            <FormGroup className='select_group'>
                <select className='select'>
                    <option value="ac">AC car</option>
                    <option value="non-ac">Non-AC car</option>
                </select>
            </FormGroup>

            <FormGroup className='form_group'>
              <button className=" find_car-btn">Find car</button>
            </FormGroup>
        </div>
    </Form>
}

export default FindCarForm