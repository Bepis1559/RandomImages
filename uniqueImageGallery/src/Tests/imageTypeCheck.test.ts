import { imageTypeCheck } from "../helpers/AddModalHelpers";
import { describe } from "node:test";

describe('imageTypeCheck', () => {
    it('should check if image type is valid', () => {
        let validType: boolean
        for (let i = 1; i <= 5; i++) {
            validType = imageTypeCheck(i)
            expect(validType).toEqual(true)
        }
        const invalidType = imageTypeCheck(6)
        expect(invalidType).toEqual(false)
    })
})