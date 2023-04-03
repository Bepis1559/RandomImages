import { ReactElement } from "react";
import {
  doNotAllowSpaces,
  imageFormatCheck,
} from "../../helpers/AddModalHelpers";
import { ValidFeedback } from "./ValidFeedback";
import { InvalidFeedback } from "./InvalidFeedback";

export const ImageFormat = (props: imageFormatProps): ReactElement => {
  const { imageFormat, setImageFormat } = props;
  return (
    <>
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
            imageFormatCheck(imageFormat) ? "is-valid" : "is-invalid"
          }`}
          id="imageFormat"
          placeholder="Enter image format, either jpg or png"
          name="imageFormat"
          required
        />
        <InvalidFeedback text='Enter either "png" or "jpg"' />
        <ValidFeedback />
      </div>
    </>
  );
};
