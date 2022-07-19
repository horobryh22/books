import { RootState } from 'store/store';

export const selectImage = (state: RootState): string =>
    state.books.selectedBook.volumeInfo.imageLinks.thumbnail;
