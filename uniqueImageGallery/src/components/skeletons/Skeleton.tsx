import { ReactElement } from "react";
import "./Skeleton.css";

type props = {
  classes: string;
};

export const Skeleton = ({ classes }: props): ReactElement => {
  const classNames = `skeleton ${classes} animate-pulse`;
  return <div className={classNames}></div>;
};
