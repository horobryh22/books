import { CategoryBooksType, SortingBooksType } from 'store';

export type SelectItems = {
    [key: string]: SelectItem[];
};

export type SelectItem = {
    id: number;
    value: CategoryBooksType | SortingBooksType;
    title: CategoryBooksType | SortingBooksType;
};

export type SearchFormValues = {
    category: CategoryBooksType;
    sorting: SortingBooksType;
    bookTitle: string;
};
