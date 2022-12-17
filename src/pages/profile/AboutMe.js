import { Card, Col, Row } from "reactstrap";
import { primaryColor } from "../../Colors/Colors";
import { getAgeFromDOB } from "../../utils";

const Details = ({ label = "", value = "" }) => {
  return (
    <div className="row">
      <span className="col-5 biolabel">{label}:</span>
      <span className="col-7 biovalue">{value}</span>
    </div>
  );
};

export default ({ profileInfo = {} }) => {
  return (
    <div>
      {/* <p className="text-white">{JSON.stringify(profileInfo)}</p> */}
      <Row>
        <Col md={4}>

          <Card body className="my-2 gig_card shadow" >
            <h4 style={{color:primaryColor}}>Bio</h4>

            <p>{profileInfo.bio}</p>
          </Card>
        </Col>
        <Col md={4}>

          <Card body className="my-2 gig_card shadow" >
            <Details label="Age" value={getAgeFromDOB(profileInfo.dob) || "-"} />
            <Details label="Gender" value={profileInfo.gender || "-"} />
            <Details label="Complexion" value={profileInfo.complexion || "-"} />
            <Details label="Hair Color" value={profileInfo.hair_color || "-"} />
            <Details label="Height" value={profileInfo.height || "-" + " (cm)"} />
            <Details label="Bust" value={profileInfo.bust || "-" + " (cm)"} />
            <Details label="Dress" value={profileInfo.dress || "-" + " (cm)"} />
            <Details label="Shoes" value={profileInfo.shoes || "-" + " (EU)"} />
            <Details label="Hips" value={profileInfo.hips || "-" + " (cm)"} />
            <Details label="Waist" value={profileInfo.waist || "-" + " (cm)"} />
          </Card>
        </Col>
        <Col md={4}>
          <Card body className="my-2 gig_card shadow" >
            <Details label="Shape" value={profileInfo.shape || "-"} />
            <Details label="Speciality" value={profileInfo.speciality || "-"} />
            <Details label="Services" value={profileInfo.services || "-"} />
          </Card>

        </Col>
      </Row>


    </div>
  );
};
