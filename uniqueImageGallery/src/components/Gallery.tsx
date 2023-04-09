import { ReactElement, useContext, useMemo } from "react";
import { MyContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { Image } from "./Image";

const Gallery = (): ReactElement => {
  const { images } = useContext(MyContext);

  const memoizedImages = useMemo(
    () =>
      images.map((image) => (
        <Image
          key={uuidv4()}
          email={image.email}
          imageFormat={image.imageFormat}
          imageType={image.imageType}
        />
      )),
    [images],
  );

  return <main className="gallery">{memoizedImages}</main>;
};

export default Gallery;
