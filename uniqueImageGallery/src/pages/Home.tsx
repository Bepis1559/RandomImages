import { ReactElement, Suspense } from "react";
import { AddButton } from "../components/AddButton";
import Gallery from "../components/Gallery";

const Home = (): ReactElement => {
  return (
    <>
      <AddButton />

      <Gallery />
    </>
  );
};

export default Home;
