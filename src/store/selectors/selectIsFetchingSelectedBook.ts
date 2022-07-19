import { RootState } from 'store/store';

export const selectIsFetchingSelectedBook = (state: RootState): boolean =>
    state.books.isFetchingSelectedBook;
