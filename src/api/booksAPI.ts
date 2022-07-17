import axios from 'axios';

import { ResponseType } from 'api/types/responseType/responseType';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
});

export const booksAPI = {
    getBooks: async (bookTitle: string, category: string, sortValue: string) => {
        return instance.get<ResponseType>(`volumes?q=${bookTitle}+subject:${category}`, {
            params: {
                key: 'AIzaSyCtv16929eV7o5_B44eQcMt9A98OnSbOVE',
                printType: 'books',
                maxResults: '2',
                orderBy: sortValue,
            },
        });
    },
};
