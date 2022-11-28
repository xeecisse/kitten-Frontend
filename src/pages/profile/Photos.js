import { Col, Row } from "reactstrap";
import model_image from "../../img/bg_1.jpg";
import model_image2 from "../../img/bg_5.jpg";
import model_image3 from "../../img/bg_2.jpg";
import model_image4 from "../../img/bg_3.jpg";
import model_image5 from "../../img/bg.jpg";
import model_image6 from "../../img/image_1.jpg";
import model_image7 from "../../img/image_2.jpg";
import ImageCard from "./ImageCard";
import "./grid.css";

// export default () => {
//     return (
//         <div>
//             {/* <h3 className="text-center">Photos</h3> */}

//             <Row className="d-flex flex-row flex-wrap">
//                 {[1,2,3,4,5,6,7,8,9,10].map(i => (
//                     <Col md={6} className='my-2' key={i}>
//                         <img src={i%2==0 ? model_image:model_image2} className='img-fluid rounded' />
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     )
// }

export default ({ images = [] }) => {
  const renderImages = images.map((image, i) => {
    return <ImageCard key={i} image={image} />;
  });

  return <div className="image-list">{renderImages}</div>;
};
