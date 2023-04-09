import { useParams } from "react-router-dom";
import { ExtractName } from "../helpers/ExtractName";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/Context";
import { SkeletonPost } from "../components/skeletons/SkeletonPost";

const IndividualImage = () => {
  const { name } = useParams<{ name: string }>();
  const { images } = useContext(MyContext);

  const [stateName, setName] = useState<string>();
  const [image, setImage] = useState<Image>();
  const [stateImages, setImages] = useState<Image[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImages(images);
    setImage(
      stateImages?.find((image: Image) => ExtractName(image.email) === name),
    );
    setName(name);

    // Simulate a 2-second delay before setting isLoading to false
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout when the component unmounts or when the dependency array changes
    return () => {
      clearTimeout(timeout);
    };
  }, [images, name, stateImages, setImage, setName]);

  const src = `https://robohash.org/${image?.email}.${
    image?.imageFormat
  }?set=set${image?.imageType}&size=${200}x${200} `;

  return isLoading ? ( // Render the Loading state while isLoading is true
    [...Array(10).keys()].map((i) => {
      return <SkeletonPost key={i} />;
    })
  ) : (
    <div className="individualImgContainer">
      <h1>{stateName}</h1>
      <img className="individualImage" src={src} alt="image" />
    </div>
  );
};

export default IndividualImage;
