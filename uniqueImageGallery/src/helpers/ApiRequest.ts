export const ApiRequest = async (url = '', optionsObj: RequestInit): Promise<void> => {
    try {
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw Error('Please reload the app,something went wrong')
    } catch (error: any) {
        console.log(error)
    }
}