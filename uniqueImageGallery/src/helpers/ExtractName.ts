export const ExtractName = (email: string): string => {
    const atIndex = email.indexOf('@')
    const name = email.slice(0, atIndex)

    return name
}