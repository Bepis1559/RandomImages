import { lazy } from 'react'

export const LazyLoadWithDelay = (delay: number, importPath: string): React.LazyExoticComponent<React.ComponentType<any>> => {
    return (
        lazy(async (): Promise<any> => {

            // creates a new Promise using the Promise constructor, and
            //  inside the Promise's executor function, it calls setTimeout 
            //  with resolve as the callback and a delay of 1000ms
            await new Promise((resolve) => setTimeout(resolve, delay))

            // returns a Promise that resolves to the module object of the 
            // dynamically loaded component.
            const module = await import(importPath)

            // returns an object with a property default that contains the 
            // default export from the loaded module
            return { default: module.default }
        })
    )
}


