import { FaClock } from "react-icons/fa";
import { Card, CardBody, CardHeader } from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import '../../styles/AppStyles.css'
export default (props) => {
  return (
    <p className="text-white">
      <div className="d-flex justify-content-between mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
          alt="avatar"
          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
          width="60"
        />
        <Card className="mask-custom">
          <CardHeader
            className="d-flex justify-content-between p-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}
          >
            <p className="fw-bold mb-0">Brad Pitt</p>
            <p className="text-light small mb-0">
              <FaClock /> 12 mins ago
            </p>
          </CardHeader>
          <CardBody>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <Card className="w-100 mask-custom">
          <CardHeader
            className="d-flex justify-content-between p-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}
          >
            <p className="fw-bold mb-0">Lara Croft</p>
            <p className="text-light small mb-0">
              <FaClock /> 13 mins ago
            </p>
          </CardHeader>
          <CardBody>
            <p className="mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </CardBody>
        </Card>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
          alt="avatar"
          className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
          width="60"
        />
      </div>
      <div className="d-flex justify-content-between mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
          alt="avatar"
          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
          width="60"
        />
        <Card className="mask-custom">
          <CardHeader
            className="d-flex justify-content-between p-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}
          >
            <p className="fw-bold mb-0">Brad Pitt</p>
            <p className="text-light small mb-0">
              <FaClock /> 10 mins ago
            </p>
          </CardHeader>
          <CardBody>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          label="Message"
          id="textAreaExample"
          rows={4}
        />
      </div>
      <button className="primary_button">Create Contract</button>
      <CustomButton color="light" size="lg" rounded className="float-end">
        Send
      </CustomButton>
    </p>
  );
};
