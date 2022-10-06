import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { themeClass } from '../variables';

function ModalAlert({ isOpen = false, toggle = (f) => f, prisonNo='' }) {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(p => !p)

  return (
    <Modal toggle={toggle} isOpen={isOpen}>
      <ModalHeader toggle={toggle} style={{backgroundColor:themeClass,border:"none",color:"white"}}>Nigerian Correctional Service</ModalHeader>
      <ModalBody style={{backgroundColor:themeClass,border:"none",color:"white"}}>
       Form submitted sucessfully! The Prison Number generated is {prisonNo}
      </ModalBody>
      <ModalFooter style={{backgroundColor:themeClass,border:"none"}}>
        <Button style={{backgroundColor:"white",border:"none",color:"black",width:"40%"}} onClick={toggle}>
         Ok
        </Button>{' '}
      
      </ModalFooter>
    </Modal>
  );
}
export default ModalAlert;
