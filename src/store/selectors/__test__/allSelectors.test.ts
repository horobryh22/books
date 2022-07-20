import {
    selectAuthors,
    selectBooks,
    selectCategories,
    selectDescription,
    selectDidUserSearch,
    selectError,
    selectImage,
    selectIsFetchingSelectedBook,
    selectIsGettingBooks,
    selectStartIndex,
    selectTitle,
    selectTotalItems,
} from 'store';
import { RootState } from 'store/store';

describe('select', () => {
    const TOTAL_ITEMS = 150;

    const initialState: RootState = {
        books: {
            didUserSearch: false,
            error: null,
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
        },
    };

    test('authors', () => {
        const authors = selectAuthors(initialState);

        expect(authors).toEqual(['testName3', 'testName4']);
    });

    test('books', () => {
        const books = selectBooks(initialState);

        expect(books).toEqual([
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
        ]);
        expect(books.length).toBe(1);
    });

    test('categories', () => {
        const categories = selectCategories(initialState);

        expect(categories).toEqual(['testCategory3', 'testCategory4']);
    });

    test('description', () => {
        const description = selectDescription(initialState);

        expect(description).toBe('someText1');
    });

    test('didUserSearch', () => {
        const didUserSearch = selectDidUserSearch(initialState);

        expect(didUserSearch).toBeFalsy();
    });

    test('error', () => {
        const error = selectError(initialState);

        expect(error).toBeNull();
    });

    test('image', () => {
        const image = selectImage(initialState);

        expect(image).toBe('image1');
    });

    test('isFetchingSelectedBooks', () => {
        const isFetchingSelectedBooks = selectIsFetchingSelectedBook(initialState);

        expect(isFetchingSelectedBooks).toBeFalsy();
    });

    test('isGettingBooks', () => {
        const isGettingBooks = selectIsGettingBooks(initialState);

        expect(isGettingBooks).toBeFalsy();
    });

    test('startIndex', () => {
        const startIndex = selectStartIndex(initialState);

        expect(startIndex).toBe(0);
    });

    test('title', () => {
        const title = selectTitle(initialState);

        expect(title).toBe('someTitle1');
    });

    test('totalItems', () => {
        const totalItems = selectTotalItems(initialState);

        expect(totalItems).toBe(TOTAL_ITEMS);
    });
});

export {};
