import { RootState } from 'store/store';

export const selectDescription = (state: RootState): string =>
    state.books.selectedBook.volumeInfo.description;
