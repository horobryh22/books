import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { booksAPI, ResponseGetBookType, ResponseGetBooksType } from 'api';
import { GetBooksDataType, InitialStateBooks } from 'store/types';

const initialState: InitialStateBooks = {
    isGettingBooks: false,
    books: [],
    error: null,
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
            state.searchValues.startIndex += 30;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = [...state.books, ...action.payload.items];
            state.totalItems = action.payload.totalItems;
            state.isGettingBooks = false;
        });
        builder.addCase(fetchBooks.pending, state => {
            state.isGettingBooks = true;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.isGettingBooks = false;
            console.error(action.payload);
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.selectedBook = action.payload;
            state.isFetchingSelectedBook = false;
        });
        builder.addCase(fetchBook.pending, state => {
            state.isFetchingSelectedBook = true;
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            state.isFetchingSelectedBook = false;
            console.error(action.payload);
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

            return rejectWithValue(`fetchBooks: ${err.message}`);
        }
    },
);

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

        return rejectWithValue(`fetchBook: ${err.message}`);
    }
});

export default booksSlice.reducer;
export const { setSearchValues } = booksSlice.actions;
