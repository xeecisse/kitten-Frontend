import React from "react";
import CustomButton from "../../components/UI/CustomButton";

import bg_2 from '../../img/bg_2.jpg'
import model_image from '../../img/bg_2.jpg'
import ProfileDetails from "./ProfileDetails";
import {FaEnvelope, FaBookmark, } from 'react-icons/fa'
import {MdRateReview} from 'react-icons/md'


function Profile () {


  return (
    
    <div
    className="m-0"
     style={{
       backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg_2})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '100vh',
       overflow: 'scroll',
     }}>
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 p-2">
          <img src={model_image} className='img-fluid rounded' />
          </div>
        </div>

        <div className="row align-items-center my-1 my-xs-3 my-sm-3">
          <div className="offset-md-3 col-md-1 col-sm-3 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <img src={model_image} className='img-fluid rounded' />
          </div>

            <div className="col-md-6 col-sm-9">
              <p className="display-6 text-white">miss_independent (20)</p>

              <p className="display-6 text-white">Kano, Nigeria</p>
            </div>
          </div>

          <div className="row">
            <div className="offset-md-3 col-md-6 d-flex flex-row justify-content-between">
            <CustomButton color='dark' className='col-4 col-md-3 col-sm-4'><FaEnvelope color="white" size={18} className='mr-2' /> Message</CustomButton>
            <CustomButton color='dark' className='col-4 col-md-3 col-sm-4 mx-1'><FaBookmark color="white" size={18} className='mr-2' /> Save</CustomButton>
            <CustomButton color='dark' className='col-4 col-md-3 col-sm-4'><MdRateReview color="white" size={18} className='mr-2' /> Reviews</CustomButton>
            </div>
          </div>

          <div className="row my-1 my-sm-3">
            <div className="offset-md-3 col-md-6">
              <ProfileDetails />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
