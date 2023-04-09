import {
  ReactElement,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { fetchDataAndSet } from "../helpers/FetchDataAndSet";

const URL = "http://localhost:5000/users";

// default values
export const MyContext = createContext<ProviderValueProps>({
  images: [],
  URL: "http://localhost:5000/users",
  addImage: () => [],
});

export const MyContextProvider = ({ children }: { children: ReactElement }) => {
  const [images, setImages] = useState<Image[]>([]);

  const addImage = useCallback(
    (newImage: Image) => {
      setImages((prevImages: Image[]) => [...prevImages, newImage]);
    },
    [setImages],
  );

  useEffect(() => {
    fetchDataAndSet(setImages, URL);
  }, []);

  const ProviderValue: ProviderValueProps = {
    images,
    URL,
    addImage,
  };
  return (
    <MyContext.Provider value={ProviderValue}>{children}</MyContext.Provider>
  );
};
