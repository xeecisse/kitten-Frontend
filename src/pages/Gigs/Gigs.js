import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
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
    <ImageBackgroundWrapper>
      <Container>
        <Form>
          <div className="row">
            <Col md={8}>
              <Input placeholder="Search for gigs" style={{ margin: '10px' }} />
            </Col>

            <Col md={3}>
              <select className="form-control mx-2">
                <option>--select speciality--</option>
              </select>
              {/* <Input style={{ margin: "10px" }} /> */}
            </Col>
          </div>
        </Form>

        {/* <div className='text-white'>{JSON.stringify(user.status)}</div> */}

        {loading && <Spinner color="white" />}

        {gigs &&
          gigs.map((gig, index) => (
            <Card
              key={index}
              style={{
                border: 'none',
                backgroundColor: 'rgba(127, 205, 218, 0.1)',
                color: 'white',
                fontFamily: '"Gill Sans", sans-serif',
              }}
              body
              className="my-2"
            >
              <div className="container">
                <div className="row"></div>

                <div className="row align-items-center my-1 my-xs-3 my-sm-3">
                  <div className="md-1 col-sm-3 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
                    <img src={gig.banner} className="img-fluid rounded" />
                  </div>

                  <div className="col-md-5 col-sm-9">
                    <p className="display-6 text-white">{gig.title}</p>
                    <p>{gig.description}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-direction-row">
                <BsFillGeoAltFill size={18} className="me-2 mt-1" />
                <p>{gig.location}</p>
              </div>
              <div className="d-flex flex-direction-row">
                <BsCalendar className="me-2 mt-1" />
                <p>
                  Casting Date : {gig.gig_date} - {gig.reg_end_date}
                </p>
              </div>
              <div className="d-flex flex-direction-row">
                <FaDollarSign className="me-2 mt-1" />
                <p>{gig.payment_type}</p>
              </div>
              <div className="row">
                <Button
                  className="col-6"
                  color="dark"
                  onClick={() => navigate(`/gig-details/${gig.id}`)}
                >
                  View details
                </Button>
                <Button
                  className="col-6"
                  color="warning"
                  onClick={() => {
                    setProposalIsOpen(true)
                    setSelectedGig(gig)
                  }}
                >
                  Apply now
                </Button>
              </div>
            </Card>
          ))}
      </Container>
      <SubmitProposal
        isOpen={proposalIsOpen}
        toggle={() => setProposalIsOpen((p) => !p)}
        selectedGig={selectedGig}
      />
      <InactiveAccountModal
        isOpen={inavtiveModal}
        toggle={() => setInactiveModal((p) => !p)}
      />
    </ImageBackgroundWrapper>
  )
}

export default Gigs
