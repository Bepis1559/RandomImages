import { useParams } from "react-router-dom";
import { ExtractName } from "../helpers/ExtractName";
import { useContext, useState, ReactElement, useLayoutEffect } from "react";
import { MyContext } from "../context/Context";
import { DeleteButton } from "../components/DeleteButton";
import { Error } from "./Error";

const IndividualImage = (): ReactElement => {
  const { name } = useParams<{ name: string }>();
  const { images } = useContext(MyContext);

  const [image, setImage] = useState<Image>();

  useLayoutEffect(() => {
    setImage(images?.find((image: Image) => ExtractName(image.email) === name));
  }, [images, name, setImage]);

  const src = `https://robohash.org/${image?.email}.${
    image?.imageFormat
  }?set=set${image?.imageType}&size=${200}x${200} `;

  const arrayWithNames: string[] = images.map((image: Image) =>
    ExtractName(image.email),
  );

  return name && arrayWithNames.includes(name) ? (
    <div className="individualImgContainer">
      <h1>{name}</h1>
      <DeleteButton email={image?.email} />
      <div className="imageContainer">
        <img className="individualImage" src={src} alt="image" />
      </div>
    </div>
  ) : (
    <Error />
  );
};
export default IndividualImage;
