import { ReactElement, useContext } from "react";
import { MyContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";

import { Image } from "./Image";

export const Gallery = (): ReactElement => {
  const { images } = useContext(MyContext);

  return (
    <main className="gallery">
      {images.map((image) => (
        <Image
          key={uuidv4()}
          email={image.email}
          imageFormat={image.imageFormat}
          imageType={image.imageType}
        />
      ))}
    </main>
  );
};
