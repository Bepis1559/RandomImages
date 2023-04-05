export const fetchDataAndSet = async (
    setFunction: React.Dispatch<React.SetStateAction<Image[]>>,
    URL: string
) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        setFunction(data);
    } catch (e) {
        console.log(e);
    }
};