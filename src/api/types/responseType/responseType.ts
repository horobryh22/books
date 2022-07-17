import { BookType } from 'store/types';

export type ResponseType = {
    items: BookType[];
    kind: string;
    totalItems: number;
};
