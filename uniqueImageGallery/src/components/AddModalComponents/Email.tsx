import { ReactElement, useEffect } from "react";
import {
  doNotAllowSpaces,
  takenEmailCheck,
  validEmailCheck,
} from "../../helpers/AddModalHelpers";
import InvalidFeedback from "./InvalidFeedback";
import ValidFeedback from "./ValidFeedback";
import { useDebounce } from "use-debounce";

const Email = (props: emailProps): ReactElement => {
  const {
    email,
    setEmail,
    setIsEmailTaken,
    takenEmails,
    setTakenEmails,
    URL,
    isEmailTaken,
  } = props;

  const [debouncedEmail] = useDebounce(email, 1000);
  useEffect(() => {
    const isEmailTaken = takenEmailCheck(
      setTakenEmails,
      URL,
      takenEmails,
      email,
    );
    setEmailTakenBasedOnCondition(isEmailTaken);
  }, [debouncedEmail]);

  useEffect(() => {
    setEmailTakenBasedOnCondition(takenEmails?.includes(email));
  }, [takenEmails]);

  function setEmailTakenBasedOnCondition(condition: boolean | undefined) {
    if (condition) {
      setIsEmailTaken(true);
    } else {
      setIsEmailTaken(false);
    }
  }

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
            validEmailCheck(email) && !isEmailTaken ? "is-valid" : "is-invalid"
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

export default Email;
