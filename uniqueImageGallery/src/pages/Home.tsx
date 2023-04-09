import { ReactElement, Suspense, lazy } from "react";
import { AddButton } from "../components/AddButton";
// import Gallery from "../components/Gallery";
import { ArrayOfSkeletonPosts } from "../components/skeletons/ArrayOfSkeletonPosts";
// import { LazyLoadWithDelay } from "../helpers/LazyLoadWithDelay";

const Home = (): ReactElement => {
  const Gallery = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 650));
    const module = await import("../components/Gallery");
    return { default: module.default };
  });

  // const Gallery = LazyLoadWithDelay(7000,"../components/Gallery")
  return (
    <Suspense fallback={<ArrayOfSkeletonPosts />}>
      <AddButton />
      <Gallery />
    </Suspense>
  );
};

export default Home;
