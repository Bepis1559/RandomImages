import { ReactElement, createContext, useEffect, useState } from "react";
import { fetchDataAndSet } from "../helpers/FetchData";

const URL = "http://localhost:5000/users";

export const MyContext = createContext<ContextValues>({
  email: "",
  setEmail: () => {},
  imageFormat: "",
  setImageFormat: () => {},
  imageType: 1,
  setImageType: () => {},
  images: [],
  setImages: () => [],
});

export const MyContextProvider = ({ children }: { children: ReactElement }) => {
  const [email, setEmail] = useState("boxi123@gmail.com");
  const [imageFormat, setImageFormat] = useState("jpg");
  const [imageType, setImageType] = useState(1);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchDataAndSet(setImages, URL);
  }, []);

  const ProviderValue: ContextValues = {
    email,
    setEmail,
    imageFormat,
    setImageFormat,
    imageType,
    setImageType,
    images,
    setImages,
  };
  return (
    <MyContext.Provider value={ProviderValue}>{children}</MyContext.Provider>
  );
};
