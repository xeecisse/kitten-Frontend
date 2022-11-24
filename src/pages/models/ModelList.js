import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Spinner,
} from "reactstrap";
// import { CustomButton, CustomTable } from './components/UI'
// import CustomCard from './components/UI/CustomCard'
import modelData from "./sample_data.json";

import bg_2 from "../../img/bg_2.jpg";
import image_2 from "../../img/image_2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getModelList } from "../../redux/actions/models";
import { getAgeFromDOB } from "../../utils";

function GeneralModels() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modelList = useSelector((state) => state.models.modelList) || [];

  useEffect(() => {
    dispatch(getModelList());
  }, [dispatch]);

  return (
    <div
      className="m-0"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg_2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      {/* <SearchBar/> */}
      {/* {JSON.stringify(modelList)} */}
      <Row className="m-0 my-1">
        <Col
          className="offset-md-2 d-flex flex-direction-row flex-wrap  bg-dager"
          md={8}
        >
          <Card
            style={{
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
            className="w-100"
          >
            {/* <div className="my-2 px-2">
              <Input className="form-control" placeholder="Search for model" />
            </div> */}
            {modelList.length ? null : (
              <p className="text-center text-white">
                List is empty, check back later
              </p>
            )}
            <Row className="m-0">
              {modelList.map((model, i) => (
                <div className="col-md-6 my-1 px-1">
                  <Card
                    key={i}
                    className="d-flex flex-direction-column justify-content-end"
                    style={{
                      height: "500px",
                      // width: "48%",
                      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${model.cover_image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`view-model/${model.id}`)}
                  >
                    <div className="p-2">
                      <p className="h4">
                        {/* {i.preferred_name}  */}
                        {model.firstname} {model.lastname} (
                        {getAgeFromDOB(model.dob)})
                      </p>
                      <p className="h6">{model.location}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GeneralModels;
