import { KeyboardEvent } from "react";
import { doNotAllowSpaces } from "../helpers/AddModalHelpers";

interface MockedEvent extends KeyboardEvent {
    charCodeAt: jest.Mock<any, any>;
    preventDefault: jest.Mock<any, any>;
}

describe('doNotAllowSpaces', () => {
    it('prevents space key', () => {
        // create mocked stuff
        const event: MockedEvent = {
            key: ' ',
            charCodeAt: jest.fn().mockReturnValue(32),
            preventDefault: jest.fn()
        } as MockedEvent;
        // call function with mocked stuff
        doNotAllowSpaces(event);


        // set expectations
        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('does not prevent non-space key', () => {
        const event: MockedEvent = {
            key: 'a',
            charCodeAt: jest.fn().mockReturnValue(97),
            preventDefault: jest.fn()
        } as MockedEvent;
        doNotAllowSpaces(event);
        expect(event.preventDefault).not.toHaveBeenCalled();
    });
});
