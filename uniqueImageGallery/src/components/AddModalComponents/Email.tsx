import { ReactElement } from "react";
import {
  doNotAllowSpaces,
  takenEmailCheck,
  validEmailCheck,
} from "../../helpers/AddModalHelpers";
import { ValidFeedback } from "./ValidFeedback";
import { InvalidFeedback } from "./InvalidFeedback";

export const Email = (props: emailProps): ReactElement => {
  const { email, setEmail, setTakenEmails, takenEmails, URL } = props;
  return (
    <>
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
            validEmailCheck(email) &&
            !takenEmailCheck(setTakenEmails, URL, takenEmails, email)
              ? "is-valid"
              : "is-invalid"
          }`}
          id="email"
          placeholder="Enter email"
          name="email"
          required
        />
        <InvalidFeedback text="email is invalid or taken" />
        <ValidFeedback />
      </div>
    </>
  );
};
