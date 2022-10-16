import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Spinner,
} from 'reactstrap'
// import { CustomButton, CustomTable } from './components/UI'
// import CustomCard from './components/UI/CustomCard'

import bg_2 from '../img/bg_2.jpg'
import image_2 from '../img/image_2.jpg'

function GeneralModels() {
  const navigate = useNavigate()
  return (
    <div
      className="m-0"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg_2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      {/* <SearchBar/> */}

      <Row className="m-0 my-4">
        <Col className="offset-md-2 d-flex flex-direction-row flex-wrap" md={8}>
          <Card
            style={{
              borderRadius: '0',
              border: 'none',
              backgroundColor: 'rgba(127, 205, 218, 0.1)',
              color: 'white',
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader style={{}}>Signup</CardHeader>
            <CardBody>
              <Row className="login-row mt-2">
                <div className="my-2">
                  <Input
                    className="form-control"
                    placeholder="Search for model"
                  />
                  {/* <Col md={2}>
          <Input
          className="form-control"
          placeholder="Search for model" 
          />
          </Col> */}
                </div>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <Card
                    key={i}
                    className="d-flex flex-direction-column justify-content-end p-2 m-2"
                    style={{
                      height: '500px',
                      width: '48%',
                      backgroundImage: `url(${image_2})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <Button onClick={() => navigate('/Model')}>
                      view model
                    </Button>
                  </Card>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default GeneralModels
