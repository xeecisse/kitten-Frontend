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
import { Button, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAgeFromDOB } from "../../utils";
import UpdateProfile from "./UpdateProfile";
import CoverPhotoUpload from "./components/CoverPhotoUpload";
import { fetchApi } from "../../redux/actions/api";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";

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

  useEffect(() => {
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
  }, []);

  return (
    <ImageBackgroundWrapper>
      {/* {JSON.stringify(profileInfo)} */}
      <div className="container">
        <div className="row">
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
                  <FaUpload />
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="row align-items-center my-1 my-xs-3 my-sm-3">
          <div className="offset-md-3 col-md-1 col-sm-3 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <img
              src={profileInfo.cover_image}
              className="img-fluid rounded"
              alt="cover_image"
            />
          </div>

          <div className="col-md-6 col-sm-9">
            <p className="display-6 text-white">
              {profileInfo.firstname} {profileInfo.lastname}
            </p>
            <p className="display-6 text-white">
              {profileInfo.preferred_name} ({getAgeFromDOB(profileInfo.dob)})
            </p>

            <p className="display-6 text-white">
              {profileInfo.state}, {profileInfo.country}
            </p>
          </div>
        </div>

        {/* <div className="text-center text-white">
          xxx{JSON.stringify({ notSelf, model_id, id: user.id })}xxx
        </div> */}

        {loading && (
          <center>
            <Spinner color="white" />
          </center>
        )}

        {notSelf ? null : (
          <div className="row">
            <div className="offset-md-3 col-md-6 d-flex flex-row justify-content-between my-1">
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
        )}

        <div className="row my-1 my-sm-3">
          <div className="offset-md-3 col-md-6">
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
      />
    </ImageBackgroundWrapper>
  );
}

export default Profile;
