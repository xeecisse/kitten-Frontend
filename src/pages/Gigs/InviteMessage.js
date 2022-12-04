import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import { useQuery } from "../../hooks";
import { postApi } from "../../redux/actions/api";

export default ({ isOpen = false, toggle = (f) => f, applicant_id }) => {
  const query = useQuery();
  const user = useSelector((state) => state.auth.user);
  const gig_id = query.get("gig_id");
  const { id } = useParams();
  const [form, setForm] = useState({
    message: "I am inviting you for an interview session",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    postApi("proposal/send-invite", {
      message: form.message,
      gig_id,
      id,
      client_id: user.id,
      applicant_id,
    })
      .then((resp) => {
        setLoading(false);
        alert(resp.message);
        toggle();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Send invitation message</ModalHeader>
      <ModalBody pb={6}>
        <FormGroup>
          <label>Message</label>
          <Input
            type="textarea"
            placeholder="Enter message here"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <CustomButton color="dark" onClick={handleSubmit} loading={loading}>
          Send
        </CustomButton>
        <CustomButton color="danger" onClick={toggle}>
          Cancel
        </CustomButton>
      </ModalFooter>
    </Modal>
  );
};
