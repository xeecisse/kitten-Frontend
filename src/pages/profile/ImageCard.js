import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={this.props.image.cloud_url}
          className="rounded"
        />
        {JSON.stringify(this.props.image.cloud_url)}
      </div>
    );
  }
}

export default ImageCard;
