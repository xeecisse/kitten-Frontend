import { Container } from "reactstrap";
import bg_2 from "../../img/bg_2.jpg";

export default (props) => (
  <div
    className="m-0"
    style={{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${
        props.bg ? props.bg : bg_2
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      overflow: "scroll",
      ...props.style,
    }}
  >
    <Container>{props.children}</Container>
  </div>
);
