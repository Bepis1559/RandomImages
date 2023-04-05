import validator from "validator";
import { KeyboardEvent } from "react";

export const fetchEmailsAndSetBusy = async (setFunction: React.Dispatch<React.SetStateAction<string[] | undefined>>, URL: string) => {
    const response = await fetch(URL);
    const result: Image[] = await response.json(); // array of objects
    const busyEmails = result.map((el) => el.email); // array of emails
    setFunction(busyEmails);
};


export const takenEmailCheck = (setFunction: React.Dispatch<React.SetStateAction<string[] | undefined>>, URL: string, takenEmails: string[] | undefined, email: string) => {
    fetchEmailsAndSetBusy(setFunction, URL);
    return takenEmails?.includes(email);
}

export const validEmailCheck = (email: string) => validator.isEmail(email)


export const imageFormatCheck = (imageFormat: string) => {
    const formatToLowerTrimmed = imageFormat.toLowerCase().trim();
    const imageFormats = ["jpg", "png"];
    if (imageFormats.includes(formatToLowerTrimmed)) {
        return true;
    } else {
        return false;
    }
}

export const imageTypeCheck = (imageType: number) => {
    const imageTypes = [1, 2, 3, 4, 5];
    if (imageTypes.includes(imageType)) {
        return true;
    } else {
        return false;
    }
}


export const doNotAllowSpaces = (e: KeyboardEvent) =>
    e.key.charCodeAt(0) === 32 ? e.preventDefault() : null;