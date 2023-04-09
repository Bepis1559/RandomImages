import { ReactElement } from "react";
import { Skeleton } from "./Skeleton";

export const SkeletonPost = (): ReactElement => {
  return (
    <div className="post">
      <Skeleton classes="title width-50" />
      <Skeleton classes="title width-100" />
      <Skeleton classes="title width-100" />
      <Skeleton classes="title width-100" />
    </div>
  );
};
