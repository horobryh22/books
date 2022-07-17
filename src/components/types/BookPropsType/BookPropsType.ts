import { BookImagesType } from 'store/types';

export type BookPropsType = {
    authors: string[];
    categories: string[];
    title: string;
    imageLinks: BookImagesType;
};
