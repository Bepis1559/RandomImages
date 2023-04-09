import { imageFormatCheck } from "../helpers/AddModalHelpers";
import { describe } from "node:test";



const wrongMockFormat = 'svg'
const correctMockFormat = 'png'
describe('imageFormatCheck', () => {
    it('should check if the image format is correct', () => {
        const wrongFormat = imageFormatCheck(wrongMockFormat)
        expect(wrongFormat).toEqual(false)
        const correctFormat = imageFormatCheck(correctMockFormat)
        expect(correctFormat).toEqual(true)
    })
})