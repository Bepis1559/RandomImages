import { ReactElement } from "react";
import { AddButton } from "../components/AddButton";
import { Gallery } from "../components/Gallery";

export const Home = (): ReactElement => {
  return (
    <>
      <AddButton />
      <Gallery />
    </>
  );
};
