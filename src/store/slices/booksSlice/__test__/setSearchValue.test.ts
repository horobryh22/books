import reducer from '../booksSlice';

import { PAGINATION_STEP } from 'constants/base';
import { setSearchValues } from 'store';
import { InitialStateBooks } from 'store/types';

export const TOTAL_ITEMS = 150;

export const initialState: InitialStateBooks = {
    didUserSearch: false,
    error: 'Network Error',
    searchValues: {
        bookTitle: 'Harry Potter',
        sorting: 'relevance',
        category: 'art',
        startIndex: 0,
    },
    isFetchingSelectedBook: false,
    books: [
        {
            id: 'testId',
            volumeInfo: {
                authors: ['testName1', 'testName2'],
                categories: ['testCategory1', 'testCategory2'],
                description: 'someText',
                title: 'someTitle',
                imageLinks: {
                    smallThumbnail: 'imageSmall',
                    thumbnail: 'image',
                },
            },
        },
    ],
    isGettingBooks: false,
    selectedBook: {
        id: 'testId1',
        volumeInfo: {
            authors: ['testName3', 'testName4'],
            categories: ['testCategory3', 'testCategory4'],
            description: 'someText1',
            title: 'someTitle1',
            imageLinks: {
                smallThumbnail: 'imageSmall1',
                thumbnail: 'image1',
            },
        },
        selfLink: '',
        kind: '',
        etag: '',
    },
    totalItems: TOTAL_ITEMS,
};

test('values should be set to the state', () => {
    const state = reducer(
        initialState,
        setSearchValues({
            bookTitle: 'New Title',
            sorting: 'newest',
            startIndex: 0,
            category: 'history',
        }),
    );

    expect(state.searchValues.bookTitle).toBe('New Title');
    expect(state.searchValues.startIndex).toBe(PAGINATION_STEP);
    expect(state.searchValues.category).toBe('history');
    expect(state.searchValues.sorting).toBe('newest');
});

export {};
