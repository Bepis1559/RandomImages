import { ReactElement } from "react";
import { SkeletonPost } from "./SkeletonPost";

export const ArrayOfSkeletonPosts = (): ReactElement => {
  return (
    <>
      {[...Array(10).keys()].map((i) => {
        return <SkeletonPost key={i} />;
      })}
    </>
  );
};
