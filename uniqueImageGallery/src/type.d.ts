type takenEmailCheck = (setTakenEmails: React.Dispatch<React.SetStateAction<string[] | undefined>>, URL: string, takenEmails: string[] | undefined, email: string) => boolean | undefined

type doNotAllowSpaces = (e: KeyboardEvent<Element>) => void | null

type invalidFeedback = (text: string) => JSX.Element

type validFeedback = () => JSX.Element

type setEmail = (email: string) => void;

type imageFormat = string

type setImageFormat = (imageFormat: string) => void

type imageType = number

type setImageType = (imageType: number) => void;

type modalProps = {
    show: boolean
    onHide: () => void
}


type ContextValues = {
    email: string;
    setEmail: setEmail
    imageFormat: imageFormat;
    setImageFormat: setImageFormat;
    imageType: imageType;
    setImageType: setImageType
    images: ReactElement<Image>[]
    setImages: (image: ReactElement<Image>) => void
}

type Image = {
    key?: string
    email: string
    imageFormat: imageFormat
    imageType: imageType
}





type emailProps = {
    email: string
    setEmail: setEmail
    setTakenEmails: React.Dispatch<React.SetStateAction<string[] | undefined>>,
    takenEmails: string[] | undefined,
    URL: string
}

type imageFormatProps = {
    imageFormat: string
    setImageFormat: setImageFormat
}

type imageTypeProps = {
    imageType: imageType
    setImageType: setImageType
}