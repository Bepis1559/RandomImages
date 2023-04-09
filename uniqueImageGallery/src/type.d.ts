
type doNotAllowSpaces = (e: KeyboardEvent<Element>) => void | null

type invalidFeedback = (text: string) => JSX.Element

type validFeedback = () => JSX.Element

type setEmail = (email: string) => void;

type imageFormat = string

type setImageFormat = (imageFormat: string) => void

type imageType = number

type setImageType = (imageType: number) => void;

type setFunction = React.Dispatch<React.SetStateAction<string[] | undefined>>

type takenEmailCheck = (setTakenEmails: setFunction, URL: string, takenEmails: string[] | undefined, email: string) => boolean | undefined




type modalProps = {
    show: boolean
    onHide: () => void
}


type ProviderValueProps = {
    images: ReactElement<Image>[]
    URL: string
    addImage: (newImage: Image) => void
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