// Import the function to be tested
import { fetchEmailsAndSetTaken } from "../helpers/AddModalHelpers";
import { describe } from "node:test";

// Import the function to be tested

describe('fetchEmailsAndSetTaken', () => {
    it('should fetch emails and set taken emails in state', async () => {
        const mockSetFunction = jest.fn();
        const mockURL = 'http://example.com/emails';
        const mockResponse = {
            json: jest.fn().mockResolvedValue([{ email: 'email1@example.com' }, { email: 'email2@example.com' }])
        };

        // Mock the fetch function
        jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as any);

        // Call the function with the mock setFunction and URL
        await fetchEmailsAndSetTaken(mockSetFunction, mockURL);

        // Assert that fetch was called with the correct URL
        expect(fetch).toHaveBeenCalledWith(mockURL);

        // Assert that the setFunction was called with the correct taken emails
        expect(mockSetFunction).toHaveBeenCalledWith([
            'email1@example.com',
            'email2@example.com',
        ]);
    });
});



