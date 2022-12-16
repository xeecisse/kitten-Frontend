import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  Button,
  Collapse,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import CustomButton from '../../components/UI/CustomButton'

export default function CoverPhotoUpload({
  isOpen = false,
  toggle = (f) => f,
  getProfileInfo = (f) => f,
  profileInfo = {},
}) {
  // const profileInfo = useSelector((state) => state.auth.user)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  const handleSubmit = () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('cover_image', image)
    formData.append('user_id', profileInfo.id)

    // fetch(`${apiURL}/profile/cover_image`, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((raw) => raw.json())
    //   .then((resp) => {
    //     setLoading(false)
    //     getProfileInfo()
    //     alert(resp.message)
    //     toggle()
    //   })
    //   .catch((e) => {
    //     setLoading(false)
    //     console.log(e)
    //     alert(e.message)
    //   })
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        toggle={toggle}
        size="lg"
      >
        <ModalHeader toggle={toggle}>
          Notice: Your profile is incomplete!
        </ModalHeader>
        <ModalBody pb={6}>
          <p>
            To start applying for jobs on Laloona, kindly update your profile
            with the following information:
          </p>

          <ul>
            <li>Update your Cover Photo</li>
            <li>Update your Physical information</li>
            <li>Upload at least 3 Pictures and 1 Video</li>
            {/* <li>u</li>
            <li>u</li>
            <li>u</li> */}
          </ul>
          {/* {JSON.stringify(photos)} */}
          {/* <FormGroup>
            <label>Select Cover Photo</label>
            <input
              className="form-control"
              type={"file"}
              onChange={handleFileUpload}
            />
          </FormGroup> */}
          {/* <ImagePicker onSave={(img) => setImage(img)} /> */}
        </ModalBody>

        <ModalFooter>
          <CustomButton
            color="dark"
            onClick={() => {
              navigate('/profile')
              localStorage.setItem('@@llna_profile_rem', true)
            }}
          >
            Go to your profile
          </CustomButton>
          <CustomButton
            color="danger"
            onClick={() => {
              toggle()
              localStorage.setItem('@@llna_profile_rem', true)
            }}
          >
            Close
          </CustomButton>
        </ModalFooter>
      </Modal>
    </>
  )
}
