import { ReactElement } from "react";
import {
  doNotAllowSpaces,
  imageTypeCheck,
} from "../../helpers/AddModalHelpers";
import InvalidFeedback from "./InvalidFeedback";
import ValidFeedback from "./ValidFeedback";

const ImageType = (props: imageTypeProps): ReactElement => {
  const { imageType, setImageType } = props;

  return (
    <>
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
            imageTypeCheck(imageType) ? "is-valid" : "is-invalid"
          }`}
          id="imageType"
          placeholder="Enter image type, from 1 to 5"
          name="imageType"
        />
        <InvalidFeedback text="Enter a number from 1 to 5" />
        <ValidFeedback />
      </div>
    </>
  );
};

export default ImageType;
