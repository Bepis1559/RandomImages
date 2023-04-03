import { ReactElement } from "react";

type props = {
  text: string;
};

export const InvalidFeedback = ({ text }: props): ReactElement => (
  <div className="invalid-feedback">{text}</div>
);
