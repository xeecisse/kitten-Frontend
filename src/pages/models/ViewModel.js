import React from "react";
import CustomButton from "../../components/UI/CustomButton";

import bg_2 from "../../img/bg_2.jpg";
import model_image from "../../img/bg_2.jpg";
import ProfileDetails from "../profile/ProfileDetails";
import { FaEnvelope, FaBookmark } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import modelData from "./sample_data.json";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";

function ViewModel() {
  const { model_id } = useParams();
  const navigate = useNavigate();
  const modelInfo = modelData.models.filter((a) => a.id === model_id)[0];
  return (
    <ImageBackgroundWrapper>
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 p-2">
            <img src={modelInfo.profile_image} className="img-fluid rounded" />
          </div>
        </div>

        <div className="row align-items-center my-1 my-xs-3 my-sm-3">
          <div className="offset-md-3 col-md-1 col-sm-3 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <img src={modelInfo.profile_image} className="img-fluid rounded" />
          </div>

          <div className="col-md-6 col-sm-9">
            <p className="display-6 text-white">
              {modelInfo.username} ({modelInfo.age})
            </p>

            <p className="display-6 text-white">{modelInfo.location}</p>
          </div>
        </div>

        <div className="row">
          <div className="offset-md-3 col-md-6 d-flex flex-row justify-content-between">
            <CustomButton
              color="dark"
              className="col-4 col-md-3 col-sm-4"
              onClick={() => navigate(`message`)}
            >
              <FaEnvelope color="white" size={18} className="mr-2" /> Message
            </CustomButton>
            <CustomButton color="dark" className="col-4 col-md-3 col-sm-4 mx-1">
              <FaBookmark color="white" size={18} className="mr-2" /> Save
            </CustomButton>
            <CustomButton
              color="dark"
              className="col-4 col-md-3 col-sm-4"
              onClick={() => navigate(`reviews`)}
            >
              <MdRateReview color="white" size={18} className="mr-2" /> Reviews
            </CustomButton>
          </div>
        </div>

        <div className="row my-1 my-sm-3">
          <div className="offset-md-3 col-md-6">
            <ProfileDetails modelInfo={modelInfo} />
          </div>
        </div>
      </div>
    </ImageBackgroundWrapper>
  );
}

export default ViewModel;
