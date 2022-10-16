import { Col, Row } from "reactstrap"
import model_image from '../../img/bg_5.jpg'

export default () => {
    return (
        <div>
            {/* <h3 className="text-center">Photos</h3> */}

            <Row className="d-flex flex-row flex-wrap">
                {[1,2,3,4,5,6,7,8].map(i => (
                    <div className='col-12 my-2 embed-responsive embed-responsive-4by3' key={i}>
                        {/* <img src={model_image} className='img-fluid rounded' /> */}
                        <video controls className="embed-responsive-item" style={{width: '100%'}}>
                            <source src={require('../../img/model_video.mp4')} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                ))}
            </Row>
        </div>
    )
}