import { isError } from 'utils';

describe('function isError', () => {
    let result;

    beforeEach(() => {
        result = null;
    });

    test('should return false', () => {
        result = isError({ type: 'fetchBooks-fullfield' });

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        result = isError({ type: 'fetchBooks-rejected' });

        expect(result).toBeTruthy();
    });
});

export {};
