import { validEmailCheck } from "../helpers/AddModalHelpers";
import { describe } from "node:test";

const mockEmail = 'bobi12@abv.bg'

describe('validEmailCheck', () => {
    it('should validate email', () => {
        const isEmailValid = validEmailCheck(mockEmail)
        expect(isEmailValid).toEqual(true)
    })
})