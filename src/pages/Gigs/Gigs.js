import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Spinner,
} from 'reactstrap'
import model_image from '../../img/bg_2.jpg'
import bg_2 from '../../img/bg_2.jpg'
import { IoLocationSharp } from 'react-icons/ai'
import { BsFillGeoAltFill, BsFillAlarmFill, BsCalendar } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { fetchApi } from '../../redux/actions/api'
import { MdPayment } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import ImageBackgroundWrapper from '../../components/UI/ImageBackgroundWrapper'
import SubmitProposal from './SubmitProposal'
import InactiveAccountModal from '../auth/InactiveAccountModal'
import { useSelector } from 'react-redux'
import CustomButton from '../../components/UI/CustomButton'

function Gigs({ Model = {} }) {
  const user = useSelector((s) => s.auth.user)
  const [gigs, setGigs] = useState([])
  const [loading, setLoading] = useState(false)
  const [proposalIsOpen, setProposalIsOpen] = useState(false)
  const [selectedGig, setSelectedGig] = useState({})
  const navigate = useNavigate()
  const [inavtiveModal, setInactiveModal] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchApi('gigs/by-status')
      .then((resp) => {
        setLoading(false)
        if (resp.success && resp.data) {
          setGigs(resp.data)
        }
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (user && user.status === 'Incomplete') {
      let remMode = localStorage.getItem('@@llna_profile_rem')
      if (!remMode) {
        setInactiveModal(true)
      }
    }
  }, [user])

  return (
    // <ImageBackgroundWrapper>
    <div className='m-0 p-0'>
      <Form>
        <Row className='m-0 p-0 mt-3'>
          <Col md={6}>
            <Input placeholder="Search for gigs" className='search_for_gigs' />
          </Col>
          <Col md={6}>
            <select className="form-control select_specialty">
              <option>--select speciality--</option>
            </select>
            {/* <Input style={{ margin: "10px" }} /> */}
          </Col>
        </Row>

      </Form>
      <Container>
        <Row className='m-0 p-0'>
          <Col md={3}></Col>
          <Col md={6}>
            {/* <Card className='main_card shadow m-5'> */}
            {/* <div className='text-white'>{JSON.stringify(user.status)}</div> */}
            {loading && <Spinner />}
            {gigs &&
              gigs.map((gig, index) => (
                <Card
                  key={index}

                  className="mx-5 my-3 gig_card shadow-sm"
                >

                  <img
                    alt="Sample"
                    src={gig.banner}
                    className='m-2'
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {gig.title}
                    </CardTitle>
                    <CardText>
                      {gig.description}
                    </CardText>
                    <div className="d-flex flex-direction-row">
                      <BsFillGeoAltFill size={18} className="me-2 mt-1" />
                      <p className='m-0'>Location: {gig.location}</p>
                    </div>
                    <div className="d-flex flex-direction-row">
                      <BsCalendar className="me-2 mt-1" />
                      <p className='m-0'>
                        Casting Date: {gig.gig_date} - {gig.reg_end_date}
                      </p>
                    </div>
                    <div className="d-flex flex-direction-row">
                      <FaDollarSign className="me-2 mt-1" />
                      <p className=''>Payment type: {gig.payment_type}</p>
                    </div>
                    <Row className=''>
                      <Col md={6}>
                        <CustomButton
                          className="col-6"
                          color="dark"
                          onClick={() => navigate(`/gig-details/${gig.id}`)}
                        >
                          View details
                        </CustomButton>
                      </Col>
                      <Col md={6}>
                        <CustomButton
                          className="col-6"
                          color="secondary"
                          onClick={() => {
                            setProposalIsOpen(true)
                            setSelectedGig(gig)
                          }}
                          style={{ float: 'right' }}
                        >
                          Apply now
                        </CustomButton>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              ))}

            <SubmitProposal
              isOpen={proposalIsOpen}
              toggle={() => setProposalIsOpen((p) => !p)}
              selectedGig={selectedGig}
            />
            <InactiveAccountModal
              isOpen={inavtiveModal}
              toggle={() => setInactiveModal((p) => !p)}
            />
            {/* </Card> */}
          </Col>
          <Col md={3}></Col>
        </Row>

      </Container>
    </div>

    // </ImageBackgroundWrapper>
  )
}

export default Gigs
