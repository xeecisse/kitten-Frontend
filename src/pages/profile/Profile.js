import React, { useEffect, useState } from "react";
import CustomButton from "../../components/UI/CustomButton";

import bg_2 from "../../img/bg_2.jpg";
import model_image from "../../img/bg_2.jpg";
import ProfileDetails from "./ProfileDetails";
import {
  FaEnvelope,
  FaBookmark,
  FaPen,
  FaUpload,
  FaPlus,
  FaEdit,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { Navigate, useNavigate, useParams } from "react-router";
import { Button, Card, Col, Row, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAgeFromDOB } from "../../utils";
import UpdateProfile from "./UpdateProfile";
import CoverPhotoUpload from "./components/CoverPhotoUpload";
import { fetchApi } from "../../redux/actions/api";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import { useCallback } from "react";

function Profile() {
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const model_id = useParams().model_id || null;
  const user = useSelector((state) => state.auth.user);
  const [profileInfo, setProfileInfo] = useState({});
  const notSelf = model_id && model_id !== user.id ? true : false;

  const [editModalIsOpen, setEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coverImageUploadModalOpen, setCoverImageUploadModalOpen] =
    useState(false);

  const getProfileInfo = useCallback(() => {
    setLoading(true);
    fetchApi(`profile/details/${notSelf ? model_id : user.id}`)
      .then((resp) => {
        setLoading(false);
        if (resp.data && resp.data.length) {
          setProfileInfo(resp.data[0]);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [notSelf, model_id, user.id]);

  useEffect(() => {
    getProfileInfo();
  }, [getProfileInfo]);

  return (
    <div>
      {/* <p className="text-white">
        {JSON.stringify({ notSelf, model_id, id: user.id })}
      </p> */}
      <div className="container mt-3">

        {/* <div className="row d-flex d-md-none">
          <div className="offset-md-3 col-md-6 p-2">
            <img
              src={profileInfo.cover_image}
              className="img-fluid rounded"
              alt="cover_image"
            />
            {notSelf ? null : (
              <div
                style={{ marginTop: -40 }}
                className="d-flex flex-direction-row justify-content-end"
              >
                <Button
                  className="me-1"
                  onClick={() => setCoverImageUploadModalOpen(true)}
                >
                  {" "}
                  Update cover picture
                  <FaUpload className="ms-2" />
                </Button>
              </div>
              )}
              </div>
            </div> */}

        <div className="row align-items-center my-1 my-xs-3 my-sm-3">
          {/* <Card className="gig_card shadow"> */}
          <Row>
            <Col md={2}></Col>
            <Col md={2}>

              {/* <div className="offset-md-2 col-md-2 col-sm-2 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <div> */}
              <img
                src={profileInfo.cover_image}
                className="img-fluid rounded profile_image"
                alt="cover_image"
              />
              <CustomButton
                style={{ marginTop: 10, width: '100%' }}
                onClick={() => setCoverImageUploadModalOpen(true)}
              >
                Update Image
              </CustomButton>
              {/* </div>
          </div> */}
            </Col>
            <Col md={8}>

              <Row className="">
                <Col md={6}>

                  <p className="username">
                    {profileInfo.preferred_name}
                    {/* ({getAgeFromDOB(profileInfo.dob)}) */}
                  </p>
                  <p className="fullname">
                    {profileInfo.firstname} {profileInfo.lastname}
                  </p>
                  <p>
                    {profileInfo.bio}
                  </p>
                  <p className="address">
                    {profileInfo.state}, {profileInfo.country}
                  </p>
                </Col>
                <Col md={6}>
                  <CustomButton

                    className="mt-5"
                    // onClick={() => navigate("/update-profile")}
                    onClick={() => setEditModalOpen(true)}
                  >
                    Edit Profile
                  </CustomButton>


                </Col>

              </Row>
            </Col>
            <Col md={2}></Col>
          </Row>
          {/* </Card> */}

        </div>

        {/* <div className="text-center text-white">
          xxx{JSON.stringify({ notSelf, model_id, id: user.id })}xxx
        </div> */}

        {loading && (
          <center>
            <Spinner color="white" />
          </center>
        )}

        {/* {notSelf ? null : (
          <div className="row">
            <div className="offset-md-2 col-md-8 d-flex flex-row justify-content-between my-1">
              <CustomButton
                color="dark"
                className="col-6 col-md-3 col-sm-4"
                // onClick={() => navigate("/update-profile")}
                onClick={() => setEditModalOpen(true)}
              >
                <FaPen color="white" size={16} className="mr-2" /> Edit Profile
              </CustomButton>
              <CustomButton
                color="dark"
                className="col-6 col-md-3 col-sm-4 mx-1"
                onClick={() => navigate("/create-gig")}
              >
                <FaPlus color="white" size={16} className="mr-2" /> Create Gig
              </CustomButton>
            </div>
          </div>
        )} */}

        <div className="row mt-5">
          <div className="offset-md-2 col-md-8">
            <ProfileDetails notSelf={notSelf} profileInfo={profileInfo} />
          </div>
        </div>
      </div>

      <UpdateProfile
        isOpen={editModalIsOpen}
        onClose={() => setEditModalOpen(false)}
        onOpen={() => setEditModalOpen(true)}
        profileInfo={profileInfo}
      />
      <CoverPhotoUpload
        isOpen={coverImageUploadModalOpen}
        toggle={() => setCoverImageUploadModalOpen((p) => !p)}
        getProfileInfo={getProfileInfo}
        profileInfo={profileInfo}
      />

    </div>
  );
}

export default Profile;
