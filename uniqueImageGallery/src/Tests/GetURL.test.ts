import { GetURL } from "../helpers/GetURL";
import { describe } from "node:test";


describe('GetURL', () => {
    it('should return the URL of the server', () => {
        const URL = GetURL()
        expect(URL).toEqual('http://localhost:5000/users/')
    })
})