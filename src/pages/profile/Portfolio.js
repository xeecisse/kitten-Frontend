import { Col, Row } from "reactstrap";
import model_image from "../../img/bg_5.jpg";

export default ({ portfolio = [] }) => {
  return (
    <div>
      {/* <h3 className="text-center">Photos</h3> */}

      <Row className="d-flex flex-row flex-wrap">
        {portfolio.map((i) => (
          <Col md={6} className="my-2" key={i.title}>
            <div
              className="m-0 d-flex flex-column justify-content-end px-4 py-2 rounded"
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${i.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
              }}
            >
              <h4 className="text-white">{i.title}</h4>
              <h6 className="text-white">{i.subtitle}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
