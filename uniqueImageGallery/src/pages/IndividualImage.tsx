import { useParams } from "react-router-dom";
import { ExtractName } from "../helpers/ExtractName";
import { useContext } from "react";
import { MyContext } from "../context/Context";

export const IndividualImage = () => {
  const { name } = useParams<{ name: string }>();
  const { images } = useContext(MyContext);

  const image = images.find(
    (image: Image) => ExtractName(image.email) === name,
  );

  const src = `https://robohash.org/${image.email}.${
    image.imageFormat
  }?set=set${image.imageType}&size=${200}x${200} `;

  return !image ? (
    <div className="individualImgContainer">
      <p style={{ color: "red", fontSize: "4em + .5vw" }}>Image not found</p>
    </div>
  ) : (
    <div className="individualImgContainer">
      <h1>{name}</h1>
      <img className="individualImage" src={src} alt="image" />
    </div>
  );
};
