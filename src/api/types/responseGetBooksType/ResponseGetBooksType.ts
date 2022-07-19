import { BookType } from 'store/types';

export type ResponseGetBooksType = {
    items: BookType[];
    kind: string;
    totalItems: number;
};
