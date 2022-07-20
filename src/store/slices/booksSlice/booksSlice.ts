import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { booksAPI, ResponseGetBooksType, ResponseGetBookType } from 'api';
import { PAGINATION_STEP } from 'constants/base';
import { RootState } from 'store/store';
import { GetBooksDataType, InitialStateBooks } from 'store/types';
import { isError } from 'utils';

const initialState: InitialStateBooks = {
    didUserSearch: false,
    isGettingBooks: false,
    error: null,
    books: [],
    totalItems: null,
    searchValues: {
        bookTitle: '',
        category: ' ',
        sorting: 'relevance',
        startIndex: 0,
    },
    selectedBook: {
        etag: '',
        kind: '',
        selfLink: '',
        id: '',
        volumeInfo: {
            authors: [],
            title: '',
            categories: [],
            description: '',
            imageLinks: {
                thumbnail: '',
                smallThumbnail: '',
            },
        },
    },
    isFetchingSelectedBook: false,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSearchValues: (
            state: InitialStateBooks,
            action: PayloadAction<GetBooksDataType>,
        ) => {
            state.searchValues = action.payload;
            state.searchValues.startIndex += PAGINATION_STEP;
        },
        setErrorNull: (state: InitialStateBooks, action: PayloadAction<null>) => {
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = action.payload.items;
            state.totalItems = action.payload.totalItems;
            state.isGettingBooks = false;
            state.didUserSearch = true;
        });
        builder.addCase(fetchBooks.pending, state => {
            state.isGettingBooks = true;
        });
        builder.addCase(loadMoreBooks.fulfilled, (state, action) => {
            state.books = [...state.books, ...action.payload.items];
            state.isGettingBooks = false;
            state.searchValues.startIndex += PAGINATION_STEP;
        });
        builder.addCase(loadMoreBooks.pending, state => {
            state.isGettingBooks = true;
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.selectedBook = action.payload;
            state.isFetchingSelectedBook = false;
        });
        builder.addCase(fetchBook.pending, state => {
            state.isFetchingSelectedBook = true;
        });
        builder.addMatcher(isError, (state, action) => {
            state.isGettingBooks = false;
            state.error = action.payload ? action.payload : null;
        });
    },
});

export const fetchBooks = createAsyncThunk<
    ResponseGetBooksType,
    GetBooksDataType,
    { rejectValue: string }
>(
    'books/fetchBooks',
    async (
        { bookTitle, category, sorting, startIndex },
        { rejectWithValue, dispatch },
    ) => {
        try {
            dispatch(setSearchValues({ bookTitle, category, sorting, startIndex }));
            const response = await booksAPI.getBooks({
                bookTitle,
                category,
                sorting,
                startIndex,
            });

            return response.data;
        } catch (e) {
            const err = e as Error;

            return rejectWithValue(err.message);
        }
    },
);

export const loadMoreBooks = createAsyncThunk<
    ResponseGetBooksType,
    void,
    { rejectValue: string; state: RootState }
>('books/loadMoreBooks', async (_, { rejectWithValue, getState }) => {
    try {
        const { bookTitle, category, sorting, startIndex } =
            getState().books.searchValues;

        const response = await booksAPI.getBooks({
            bookTitle,
            category,
            sorting,
            startIndex,
        });

        return response.data;
    } catch (e) {
        const err = e as Error;

        return rejectWithValue(err.message);
    }
});

export const fetchBook = createAsyncThunk<
    ResponseGetBookType,
    string,
    { rejectValue: string }
>('books/fetchBook', async (bookId, { rejectWithValue }) => {
    try {
        const response = await booksAPI.getBook(bookId);

        return response.data;
    } catch (e) {
        const err = e as Error;

        return rejectWithValue(err.message);
    }
});

export default booksSlice.reducer;
export const { setSearchValues, setErrorNull } = booksSlice.actions;
