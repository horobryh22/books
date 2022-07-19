import { RootState } from 'store/store';

export const selectAuthors = (state: RootState): string[] =>
    state.books.selectedBook.volumeInfo.authors;
