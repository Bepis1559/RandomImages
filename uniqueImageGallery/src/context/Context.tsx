import { ReactElement, createContext, useEffect, useState } from "react";
import { fetchDataAndSet } from "../helpers/FetchDataAndSet";

const URL = "http://localhost:5000/users";

// default values
export const MyContext = createContext<ProviderValueProps>({
  images: [],
  setImages(): void {},
});

export const MyContextProvider = ({ children }: { children: ReactElement }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchDataAndSet(setImages, URL);
  }, []);

  const ProviderValue: ProviderValueProps = {
    images,
    setImages,
  };
  return (
    <MyContext.Provider value={ProviderValue}>{children}</MyContext.Provider>
  );
};
