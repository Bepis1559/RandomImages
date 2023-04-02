import { ReactElement, useEffect, useRef, useState } from "react";
import { ExtractName } from "../helpers/ExtractName";
import { Link } from "react-router-dom";

export const Image = ({
  email,
  imageFormat,
  imageType,
}: Image): ReactElement => {
  const containerRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerStyle = window.getComputedStyle(container);
      const width = containerStyle.getPropertyValue("width");
      const height = containerStyle.getPropertyValue("height");
      setWidth(parseFloat(width));
      setHeight(parseFloat(height));
    }
  }, []);

  const src = `https://robohash.org/${email}.${imageFormat}?set=set${imageType}&size=${width}x${height} `;

  const name = ExtractName(email);

  return (
    <>
      <div ref={containerRef} className="imageContainer">
        <Link to={`/${name}`}>
          <img src={src} alt="image" />
        </Link>
      </div>
    </>
  );
};
