import { Col, Row } from "reactstrap";
import ChatWindow from "./ChatWindow";
import ChatList from "./ChatList";
import App from "./ChatWindowMDB";

export default (props) => {
  return (
    <div>
      <App />
    </div>
  );
};

{
  /* <Row className="mx-0 my-1">
<Col md={3}>
  <ChatList />
</Col>
<Col>
  <ChatWindow />
</Col>
<Col md={3}></Col>
</Row> */
}
