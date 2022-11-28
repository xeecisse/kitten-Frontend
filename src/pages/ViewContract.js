import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import model from '../img/bgCopy.jpg'
export default function ViewContract() {
    return (
        <div className='mb-5'>
            <div className='container'>
                <div className='mt-5'>
                    <h3 className='comp_heading'>Contract Details</h3>
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
                                <p className='contract_p'>Description</p>
                                <p>fasd fasdfas fa fasdfas fasd fas dfasdf fasdfasfasd fasdfasdf fdaf fdafasd  fdf fdf fdfasd fasdfas fa fasdfas fasd fas dfasdf fasdfasfasd fasdfasdf fdaf fdafasd  fdf fdf fdfasd fasdfas fa fasdfas fasd fas dfasdf fasdfasfasd fasdfasdf fdaf fdafasd  fdf fdf fd </p>
                                <hr className='break_line'/>
                                <p className='contract_p'>Casting Start Date</p>
                                <p>11/01/2022</p>
                                <hr className='break_line'/>
                                <p className='contract_p'>Casting End Date</p>
                                <p>11/01/2022</p>
                                <hr className='break_line'/>
                                <p className='contract_p'>Location</p>
                                <p>No 11, Murtala Mohammed Way, Kano</p>
                                <hr className='break_line'/>
                                <p className='contract_p'>Amount</p>
                                <p>1,000,000</p>
                                <hr className='break_line'/>
                                <button className='cancel_button shadow'>Cancel Contract</button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </div>
    )
}
