export const fetchDataAndSet = async (
    setImages: React.Dispatch<React.SetStateAction<Image[]>>,
    URL: string
) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        setImages(data);
    } catch (e) {
        console.log(e);
    }
};