import { CategoryBooksType, SortingBooksType } from 'store';

export type GetBooksDataType = {
    bookTitle: string;
    category: CategoryBooksType;
    sorting: SortingBooksType;
    startIndex: number;
};
