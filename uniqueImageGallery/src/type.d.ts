

type modalProps = {
    show: boolean
    onHide: () => void
}


interface ContextValues {
    email: string;
    setEmail: (email: string) => void;
    imageFormat: string;
    setImageFormat: (imageFormat: string) => void;
    imageType: number;
    setImageType: (imageType: number) => void;
    images: ReactElement<Image>[]
    setImages: (image: ReactElement<Image>) => void
}

type Image = {
    key?: string
    email: string
    imageFormat: string
    imageType: number
}