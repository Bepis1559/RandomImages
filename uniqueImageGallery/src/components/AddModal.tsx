import {
  MouseEvent,
  ReactElement,
  KeyboardEvent,
  useContext,
  useState,
  useEffect,
} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MyContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { ApiRequest } from "../helpers/ApiRequest";
import {
  fetchEmails,
  imageFormatCheck,
  imageTypeCheck,
  takenEmailCheck,
  validEmailCheck,
} from "../helpers/AddModalHelpers";
import { Email } from "./AddModalComponents/Email";
import { ImageFormat } from "./AddModalComponents/ImageFormat";
import { ImageType } from "./AddModalComponents/ImageType";
const URL = "http://localhost:5000/users";

export const AddModal = (props: modalProps): ReactElement => {
  const { onHide } = props;

  const [takenEmails, setTakenEmails] = useState<string[]>();

  useEffect(() => {
    fetchEmails(setTakenEmails, URL);
  }, []);

  const {
    email,
    setEmail,
    imageFormat,
    setImageFormat,
    imageType,
    setImageType,
    setImages,
  } = useContext(MyContext);

  const handleSubmit = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();

    const isTaken = takenEmailCheck(setTakenEmails, URL, takenEmails, email);

    if (
      validEmailCheck(email) &&
      imageFormatCheck(imageFormat) &&
      imageTypeCheck(imageType) &&
      !isTaken
    ) {
      onHide();
      setImages((prevImages: Image[]) => [
        ...prevImages,
        {
          key: uuidv4(),
          email,
          imageFormat,
          imageType,
        },
      ]);

      const apiRequestBody: Image = {
        email: email,
        imageFormat: imageFormat,
        imageType: imageType,
      };

      const postOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(apiRequestBody),
      };

      ApiRequest(URL, postOptions);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Let's add a character
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Add some info to it</h4>
        <form action="/action_page.php">
          <Email
            email={email}
            setEmail={setEmail}
            setTakenEmails={setTakenEmails}
            takenEmails={takenEmails}
            URL={URL}
          />
          <ImageFormat
            imageFormat={imageFormat}
            setImageFormat={setImageFormat}
          />
          <ImageType imageType={imageType} setImageType={setImageType} />
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
