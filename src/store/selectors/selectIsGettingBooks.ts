import { RootState } from 'store/store';

export const selectIsGettingBooks = (state: RootState): boolean =>
    state.books.isGettingBooks;
