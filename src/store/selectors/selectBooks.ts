import { RootState } from 'store/store';
import { BookType } from 'store/types';

export const selectBooks = (state: RootState): BookType[] => state.books.books;
