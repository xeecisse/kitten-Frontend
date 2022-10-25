import { FaCheck } from "react-icons/fa";
import { Card, CardBody } from "reactstrap";

const color1 = "#ccc9c4";

export default (props) => {
  const rgb = [
    color1.substring(1, 3),
    color1.substring(3, 5),
    color1.substring(5, 7),
  ];
  const color2 = `rgb(${rgb.map((c) => parseInt(c, 24) * 0.5).join()})`;
  return (
    <>
      <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>

      <Card
        className="mask-custom"
        style={{ background: `linear-gradient(${color1}, ${color2})` }}
      >
        <CardBody>
          <p className="mb-0">
            <div className="p-2 border-bottom">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">John Doe</p>
                    <p className="small text-white">Hello, Are you there?</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small mb-1 text-white">Just now</p>
                  <span className="badge bg-danger float-end">1</span>
                </div>
              </a>
            </div>
            <div className="p-2 border-bottom">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Danny Smith</p>
                    <p className="small text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-whites mb-1">5 mins ago</p>
                </div>
              </a>
            </div>
            <div className="p-2 border-bottom">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Alex Steward</p>
                    <p className="small text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-white mb-1">Yesterday</p>
                </div>
              </a>
            </div>
            <div className="p-2 border-bottom">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Ashley Olsen</p>
                    <p className="small text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-white mb-1">Yesterday</p>
                </div>
              </a>
            </div>
            <div className="p-2 border-bottom">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Kate Moss</p>
                    <p className="small text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-white mb-1">Yesterday</p>
                </div>
              </a>
            </div>
            <div className="p-2 border-bottom">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Lara Croft</p>
                    <p className="small text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-white mb-1">Yesterday</p>
                </div>
              </a>
            </div>
            <div className="p-2">
              <a
                href="#!"
                className="d-flex justify-content-between link-light"
              >
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="small text-white">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-white mb-1">5 mins ago</p>
                  <span className="text-white float-end">
                    <FaCheck />
                  </span>
                </div>
              </a>
            </div>
          </p>
        </CardBody>
      </Card>
    </>
  );
};

// (props) => {
//   return (
//     <Card>
//       <CardHeader className="text-center">Chat History</CardHeader>
//       <CardBody>
//         <ChatContact />
//         <ChatContact />
//         <ChatContact />
//         <ChatContact />
//         <ChatContact />
//         <ChatContact />
//         <ChatContact />
//       </CardBody>
//     </Card>
//   );
// };

// const ChatContact = () => {
//   return (
//     <div className="row border-top border-bottom my-2 border-end ">
//       <div className="col-md-3 d-flex flex-row justify-content-center ">
//         <img
//           src={require("../../img/image_1.jpg")}
//           className="img-fluid rounded-start"
//         />
//       </div>

//       <div className="col-md-8 d-flex flex-column">
//         <p className="my-0">Balancy Shots</p>
//         <p className="my-0">New Modeling Exhibition</p>
//         <p className="my-0 ">You: Hello</p>
//       </div>
//     </div>
//   );
// };
