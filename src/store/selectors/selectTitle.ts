import { RootState } from 'store/store';

export const selectTitle = (state: RootState): string =>
    state.books.selectedBook.volumeInfo.title;
