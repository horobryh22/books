import { ResponseGetBookType } from 'api';
import { BookType, GetBooksDataType } from 'store/types';
import { Nullable } from 'types';

export type InitialStateBooks = {
    isGettingBooks: boolean;
    books: BookType[];
    error: Nullable<string>;
    totalItems: Nullable<number>;
    searchValues: GetBooksDataType;
    selectedBook: ResponseGetBookType;
    isFetchingSelectedBook: boolean;
};
