import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context/Context";
import { IndividualImage } from "./pages/IndividualImage";

function App() {
  return (
    <MyContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<IndividualImage />} />
      </Routes>
    </MyContextProvider>
  );
}

export default App;
