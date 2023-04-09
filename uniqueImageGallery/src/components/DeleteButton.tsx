import { ReactElement, useContext, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ApiRequest } from "../helpers/ApiRequest";
import { GetURL } from "../helpers/GetURL";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
const URL = GetURL();
type props = {
  email: string | undefined;
};
export const DeleteButton = ({ email }: props): ReactElement => {
  const { images, setImages } = useContext(MyContext);

  const removeImage = useCallback(() => {
    const newImages = images.filter((image: Image) => {
      return image.email !== email;
    });
    setImages(newImages);
  }, [images, email, setImages]);

  const handleClick = () => {
    ApiRequest(`${URL}${email}`, {
      method: "DELETE",
    });
    removeImage();
  };
  return (
    <Link to="/">
      <button onClick={handleClick} className="btn btn-danger">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </Link>
  );
};
