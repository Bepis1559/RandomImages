import { ReactElement } from "react";

type props = {
  text: string;
};

const InvalidFeedback = ({ text }: props): ReactElement => (
  <div className="invalid-feedback">{text}</div>
);

export default InvalidFeedback;
