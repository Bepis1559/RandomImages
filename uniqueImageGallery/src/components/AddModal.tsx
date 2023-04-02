import {
  MouseEvent,
  ReactElement,
  KeyboardEvent,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import validator from "validator";
import { MyContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { ApiRequest } from "../helpers/ApiRequest";
const URL = "http://localhost:5000/users";

export const AddModal = (props: modalProps): ReactElement => {
  const { onHide } = props;

  const [takenEmails, setTakenEmails] = useState<string[]>();

  const fetchEmails = async () => {
    const response = await fetch(URL);
    const result: Image[] = await response.json(); // array of objects
    const busyEmails = result.map((el) => el.email); // array of emails
    setTakenEmails(busyEmails);
  };

  useLayoutEffect(() => {
    fetchEmails();
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

    const isTaken = takenEmailCheck();

    if (
      validEmailCheck() &&
      imageFormatCheck() &&
      imageTypeCheck() &&
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

  function takenEmailCheck() {
    fetchEmails();
    return takenEmails?.includes(email);
  }

  function validEmailCheck() {
    return validator.isEmail(email);
  }

  function imageFormatCheck() {
    const formatToLowerTrimmed = imageFormat.toLowerCase().trim();
    const imageFormats = ["jpg", "png"];
    if (imageFormats.includes(formatToLowerTrimmed)) {
      return true;
    } else {
      return false;
    }
  }

  function imageTypeCheck() {
    const imageTypes = [1, 2, 3, 4, 5];
    if (imageTypes.includes(imageType)) {
      return true;
    } else {
      return false;
    }
  }

  const validFeedback = (): JSX.Element => (
    <div className="valid-feedback">Looks good</div>
  );
  const invalidFeedback = (text: string): JSX.Element => (
    <div className="invalid-feedback">{text}</div>
  );

  const doNotAllowSpaces = (e: KeyboardEvent) =>
    e.key.charCodeAt(0) === 32 ? e.preventDefault() : null;

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
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>

            <input
              onKeyDown={(e) => doNotAllowSpaces(e)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={`form-control ${
                validEmailCheck() && !takenEmailCheck()
                  ? "is-valid"
                  : "is-invalid"
              }`}
              id="email"
              placeholder="Enter email"
              name="email"
              required
            />
            {invalidFeedback("email is invalid or taken")}
            {validFeedback()}
          </div>
          <div className="mb-3">
            <label htmlFor="imageFormat" className="form-label">
              Image format :
            </label>
            <input
              onKeyDown={(e) => doNotAllowSpaces(e)}
              value={imageFormat}
              onChange={(e) => {
                const value = e.target.value;
                // Check if the value contains a number
                if (!/\d/.test(value)) {
                  setImageFormat(value);
                }
              }}
              type="text"
              className={`form-control ${
                imageFormatCheck() ? "is-valid" : "is-invalid"
              }`}
              id="imageFormat"
              placeholder="Enter image format, either jpg or png"
              name="imageFormat"
              required
            />
            {invalidFeedback('Enter either "png" or "jpg"')}
            {validFeedback()}
          </div>
          <div className="mb-3 ">
            <label htmlFor="imageType" className="form-label">
              ImageType:
            </label>
            <input
              onKeyDown={(e) => doNotAllowSpaces(e)}
              value={imageType}
              onChange={(e) => {
                const newValue = e.target.value;
                const parsedValue = parseInt(newValue.slice(-1));
                if (!isNaN(parsedValue) && parsedValue !== 0) {
                  setImageType(parsedValue);
                }
              }}
              required
              maxLength={1}
              min={1}
              max={5}
              type="number"
              className={`form-control ${
                imageTypeCheck() ? "is-valid" : "is-invalid"
              }`}
              id="imageType"
              placeholder="Enter image type, from 1 to 5"
              name="imageType"
            />
            {invalidFeedback("Enter a number from 1 to 5")}
            {validFeedback()}
          </div>
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
