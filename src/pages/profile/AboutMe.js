import { Card } from "reactstrap";
import { getAgeFromDOB } from "../../utils";

const Details = ({ label = "", value = "" }) => {
  return (
    <div className="row">
      <span className="col-5 fw-bold">{label}:</span>
      <span className="col-7">{value}</span>
    </div>
  );
};

export default ({ profileInfo = {} }) => {
  return (
    <div>
      {/* <p className="text-white">{JSON.stringify(profileInfo)}</p> */}
      <Card body className="my-2 text-white" color="dark">
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

      <Card body className="my-2 text-white" color="dark">
        <Details label="Shape" value={profileInfo.shape || "-"} />
        <Details label="Speciality" value={profileInfo.speciality || "-"} />
        <Details label="Services" value={profileInfo.services || "-"} />
      </Card>

      <Card body className="my-2 text-white" color="dark">
        <h4>About Me</h4>

        <p>{profileInfo.bio}</p>
      </Card>
    </div>
  );
};
