import { RootState } from 'store/store';

export const selectDidUserSearch = (state: RootState): boolean =>
    state.books.didUserSearch;
