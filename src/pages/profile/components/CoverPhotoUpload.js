import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import CustomButton from '../../../components/UI/CustomButton'
import ImagePicker from '../../../components/UI/image-crop/ImagePicker'
import { apiURL } from '../../../redux/actions/api'
import { init } from '../../../redux/actions/auth'

export default function CoverPhotoUpload({
  isOpen = false,
  toggle = (f) => f,
  getProfileInfo = (f) => f,
  profileInfo = {}
}) {
  // const profileInfo = useSelector((state) => state.auth.user)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  const handleFileUpload = ({ target: { files } }) => {
    setImage(files[0])
  }

  const handleSubmit = () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('cover_image', image)
    formData.append('user_id', profileInfo.id)

    fetch(`${apiURL}/profile/cover_image`, {
      method: 'POST',
      body: formData,
    })
      .then((raw) => raw.json())
      .then((resp) => {
        setLoading(false)
        getProfileInfo()
        alert(resp.message)
        toggle()
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
        alert(e.message)
      })
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}><h3 className='git_title'>Upload Cover Image</h3></ModalHeader>
        <ModalBody pb={6}>
          {/* {JSON.stringify(photos)} */}
          {/* <FormGroup>
            <label>Select Cover Photo</label>
            <input
              className="form-control"
              type={"file"}
              onChange={handleFileUpload}
            />
          </FormGroup> */}
          <ImagePicker onSave={(img) => setImage(img)} />
        </ModalBody>

        <ModalFooter>
          <CustomButton
            loading={loading}
            disabled={!image}
            // title={!image ? 'Save crop before submitting' : ''}
            onClick={() => {
              if (!image) {
                alert('Save crop before submitting')
              } else {
                handleSubmit()
              }
            }}
            color="dark"
          >
            Submit
          </CustomButton>
        </ModalFooter>
      </Modal>
    </>
  )
}
