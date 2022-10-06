import React from "react";
import {  Button, Card, CardBody, CardHeader, Col,  FormGroup,  Input, Label, Row, Spinner } from "reactstrap";
import bg from "./img/bg.jpg";
import SelectInput from './components/UI/SelectInput'
import "./Signup.css";


function Signup () {
  return (
    
    <div >
     <Row
        className="m-0"
        style={{
          //   textAlign: "center",
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
     <h1 style={{color:'white',fontFamily:'font-family: "Gill Sans", sans-serif;'}}>Kitten</h1>
     <Button>Login</Button>
    
     <Col md={10} style={{ position: "relative" }}>
        
        <Card style={{borderRadius: '0',border:'none', backgroundColor: 'rgba(127, 205, 218, 0.1)',width:'50%',color:'white',fontFamily:'font-family: "Gill Sans", sans-serif;',marginRight:'42%'}}>
            <CardHeader style={{marginLeft:'5%',fontSize:'40px'}}>Signup</CardHeader>
            <CardBody> 
            <Row className="login-row mt-2">  
            
            <Col md={4} > 
            <p>Name</p>
        <Input
        className="form-control"
         placeholder="name"
        />
       </Col>
           
    
       <Col md={4} > 
       <p>Username</p>
          <Input
         type="text"
         placeholder="Username"
        />
        </Col>
   
        <Col md={4} > 
        <p>Age</p>
          <Input
         type="number"
        className="form-control"
         placeholder="Age"
        />
        </Col>
        <Col md={4} > 
        <p>Phone number</p>
      <Input
         type="number"
         placeholder="Phone number" 
        />
        </Col>
        <Col md={4} > 
     <p>Gender</p>
                  <select
                    className="form-control"
                  >
                    <option>--select--</option>
                    <option>male</option>
                    <option> female</option>
                  </select>
     </Col>

       
        <Col md={4} > 
        <p>Height</p>
          <Input
         type="number"
         placeholder="height"
        />
     </Col>
         
     <Col md={4} > 
     <p>Hips</p>
          <Input
         type="number"
         placeholder="hips"
        />
     </Col>
     <Col md={4} > 
     <p>Bust</p>
          <Input
         type="number"
         placeholder="bust"
        />
     </Col>
    
     <Col md={4}>
                  <p>Complextion</p>
                  <select
                    className="form-control"
                   
                  >
                    <option>--select--</option>
                    <option>White</option>
                    <option> fair</option>
                    <option>light brown</option>
                    <option>moderate brown</option>
                    <option>Brown</option>
                    <option>dark brown</option>
                  </select>
                </Col>
     
                <Col md={4}>
                  <p>Shape</p>
                  <select
                    className="form-control"
                   
                  >
                    <option>--select--</option>
                    <option>yuioo4</option>
                    <option> rri</option>
                    <option>4578</option>
                    <option>rio</option>
                    <option>fh</option>
                    <option>ghjk</option>
                  </select>
                </Col>
                <Col md={4}>
                    <p>Location</p>
                {/* <SelectInput
                    
                    name="State"
                 
                  /> */}
                      <select
                    className="form-control"
                   
                  >
                    <option>--select--</option>
                    <option>yuioo4</option>
                    <option> rri</option>
                    <option>4578</option>
                    <option>rio</option>
                    <option>fh</option>
                    <option>ghjk</option>
                  </select>
                
      </Col>
    
      <Col md={4} > 
     <p>Bio</p>
          <Input
         type="textarea"
         placeholder="Bio"
        />
     </Col>
     <Col md={{ size: '6', offset: '9' }}>
                  <Button
                    className="mt-2"
                    color="success"
                    
                    style={{backgroundColor:'rgb(35, 13, 54)',border:"none",width:"40%"}}
                  >
                   
                      <Spinner color="light" size={'sm'} className="me-2">
                        Loading...
                      </Spinner>
                   
                    Submit
                  </Button>
                </Col>
                <div className="text-center">
                        <hr style={{ padding: 0 }}></hr>
                        <p
                          style={{
                            fontSize: "13px",
                            marginTop: 5,
                            color: "grey",
                          }}
                        >
                          Already have an account?{" "}
                          <span style={{ cursor: "pointer" }}>
                            Login here!
                          </span>{" "}
                        </p>
                      </div>
                </Row>
    
            </CardBody>
    
        </Card>
=
     </Col>
     
      </Row>
    
    </div>
  );
}

export default Signup;
