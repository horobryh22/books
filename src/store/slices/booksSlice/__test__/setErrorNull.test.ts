import reducer from '../booksSlice';

import { initialState } from './setSearchValue.test';

import { setErrorNull } from 'store';

test('error should be null', () => {
    const state = reducer(initialState, setErrorNull(null));

    expect(state.error).toBeNull();
    expect(initialState.error).toBe('Network Error');
});

export {};
