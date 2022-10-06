import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import { Col,Row, Button,Card} from 'reactstrap'
import useQuery from '../../hooks/useQuery';
import { apiURL } from '../../redux/action/api';
import CustomCard from '../UI/CustomCard';

function ViewUser() {
  const id = useParams().id
  const [info, setInfo] = useState({})
  const [history, setHistory] = useState([])
  const query = useQuery()
  const Prison_Number = query.get('Prison_Number')
  const [loading, setLoading] = useState(false)

  const getInfo = () => {
    fetch(`${apiURL}/get_User_list?${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        // console.log(data[0]);
        //   setModalIsOpen(true);
        setInfo(data.results[0]);
        setHistory(data.history);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getInfo()
  }, [])
  return (
    <CustomCard back header=" View User Information">
 
      <div className='my-4'>
      <h5>Bio Data</h5>
    <Row>
     {/* {JSON.stringify(history)} */}
      <Col md={3} className='m-1'>First Name: {info.First_Name}</Col>
      <Col md={3} className='m-1'>Last Name: {info.Last_Name} </Col>
      <Col md={3} className='m-1'>Username: {info.Username} </Col>
      <Col md={3} className='m-1'>Email:{info.Email} </Col>
      <Col md={3} className='m-1'>Phone Number:{info.role} </Col>
      <Col md={3} className='m-1'>Role:{info.Center} </Col>
      <Col md={3} className='m-1'>Center: {info.Phone_number} </Col>
      <Col md={3} className='m-1'>Privelege: {info.privelege} </Col>
      

    </Row>
 
  </div>

  
   </CustomCard>
 
   
  )
}

export default ViewUser
