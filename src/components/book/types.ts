import { BookImagesType } from 'store/types';

export type BookPropsType = {
    bookId: string;
    authors: string[];
    categories: string[];
    title: string;
    imageLinks: BookImagesType;
};
