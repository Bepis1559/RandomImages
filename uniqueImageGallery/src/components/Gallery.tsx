import { ReactElement, useContext, useMemo } from "react";
import { MyContext } from "../context/Context";
import { Image } from "./Image";

const Gallery = (): ReactElement => {
  const { images } = useContext(MyContext);

  const memoizedImages = useMemo(
    () =>
      images.map((image, index) => (
        <Image
          key={index.toString()}
          email={image.email}
          imageFormat={image.imageFormat}
          imageType={image.imageType}
        />
      )),
    [images],
  );

  return (
    <main data-testid="gallery" className="gallery">
      {memoizedImages}
    </main>
  );
};

export default Gallery;
