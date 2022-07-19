import { ResponseGetBookType } from 'api';
import { BookType, GetBooksDataType } from 'store/types';
import { Nullable } from 'types';

export type InitialStateBooks = {
    didUserSearch: boolean;
    isGettingBooks: boolean;
    books: BookType[];
    totalItems: Nullable<number>;
    searchValues: GetBooksDataType;
    selectedBook: ResponseGetBookType;
    isFetchingSelectedBook: boolean;
};
