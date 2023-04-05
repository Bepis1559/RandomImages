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


type ProviderValueProps = {
    images: ReactElement<Image>[]
    setImages: (image: ReactElement<Image>) => void
    URL: string
}

type Image = {
    key?: string
    email: string
    imageFormat: imageFormat
    imageType: imageType
}





type emailProps = {
    email: string;
    setTakenEmails: React.Dispatch<React.SetStateAction<string[] | undefined>>
    URL: string
    takenEmails: string[] | undefined
    setIsEmailTaken: React.Dispatch<React.SetStateAction<boolean>>
    setEmail: setEmail
    isEmailTaken: boolean


}

type imageFormatProps = {
    imageFormat: string
    setImageFormat: setImageFormat
}

type imageTypeProps = {
    imageType: imageType
    setImageType: setImageType
}