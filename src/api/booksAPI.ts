import axios from 'axios';

import { ResponseGetBooksType, ResponseGetBookType } from './types';

import { PAGINATION_STEP } from 'constants/base';
import { GetBooksDataType } from 'store/types';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
});

export const booksAPI = {
    getBooks: async ({ bookTitle, category, sorting, startIndex }: GetBooksDataType) => {
        return instance.get<ResponseGetBooksType>(
            `volumes?q=${bookTitle}+subject:${category}`,
            {
                params: {
                    key: 'AIzaSyCtv16929eV7o5_B44eQcMt9A98OnSbOVE',
                    startIndex,
                    maxResults: `${PAGINATION_STEP}`,
                    orderBy: sorting,
                },
            },
        );
    },
    getBook: async (bookId: string) => {
        return instance.get<ResponseGetBookType>(`volumes/${bookId}`, {
            params: {
                key: 'AIzaSyCtv16929eV7o5_B44eQcMt9A98OnSbOVE',
            },
        });
    },
};
