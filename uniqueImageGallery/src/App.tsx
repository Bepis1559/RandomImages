import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ArrayOfSkeletonPosts } from "./components/skeletons/ArrayOfSkeletonPosts";

function App() {
  const IndividualImage = lazy(() => import("./pages/IndividualImage"));

  return (
    <Suspense fallback={<ArrayOfSkeletonPosts />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<IndividualImage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
