import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import model from '../img/bgCopy.jpg'
export default function Contract() {
    return (
        <div className='mb-5'>
            <div className='container'>
                <div className='mt-5'>
                    <h3 className='comp_heading'>Create a contract</h3>
                    <Card className='contract_card shadow p-5'>
                        <Row>
                            <Col lg={6}>
                                <div className='text-center'>
                                    <img src={model} className='contract_model_img shadow' />
                                    <p className='contract_model_name'>Nancy Ayuk</p>
                                    <p className='contract_model_about'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={5}>
                                <form>
                                    <label>Description*</label>
                                    <textarea className='contract_inputs shadow-sm'></textarea>
                                    <label>Casting Start Date*</label>
                                    <input type='date' className='contract_inputs shadow-sm' />
                                    <label>Casting End Date*</label>
                                    <input type='date' className='contract_inputs shadow-sm' />
                                    <label>Location*</label>
                                    <input type='address' className='contract_inputs shadow-sm' />
                                    <label>Amount*</label>
                                    <input type='number' className='contract_inputs shadow-sm' />
                                    <button className='primary_button shadow'>Send to Nancy</button>
                                    <button className='cancel_button shadow' style={{ float: 'right' }}>Cancel</button>
                                </form>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </div>
    )
}
