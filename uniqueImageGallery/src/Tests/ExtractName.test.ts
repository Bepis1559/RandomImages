import { ExtractName } from "../helpers/ExtractName";
import { describe } from "node:test";

const emailToTest = 'bobi@gmail.com'
describe('ExtractName', () => {
    it('should return the name part of the email passed to it', () => {
        const name = ExtractName(emailToTest)
        expect(name).toEqual('bobi')
    })
})
