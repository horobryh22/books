import { RootState } from 'store/store';

export const selectCategories = (state: RootState): string[] =>
    state.books.selectedBook.volumeInfo.categories;
