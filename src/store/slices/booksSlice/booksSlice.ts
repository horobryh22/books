import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { booksAPI } from 'api';
import { ResponseType } from 'api/types/responseType/responseType';
import { BookType, GetBooksDataType } from 'store/types';
import { Nullable } from 'types';

type InitialStateBooks = {
    isGettingBooks: boolean;
    books: BookType[];
    error: Nullable<string>;
    totalItems: Nullable<number>;
};

const initialState: InitialStateBooks = {
    isGettingBooks: false,
    books: [],
    error: null,
    totalItems: null,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.books = action.payload.items;
            state.totalItems = action.payload.totalItems;
            state.isGettingBooks = false;
        });
        builder.addCase(getBooks.pending, state => {
            state.isGettingBooks = true;
        });
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isGettingBooks = false;
            console.error(action.payload);
        });
    },
});

export const getBooks = createAsyncThunk<
    ResponseType,
    GetBooksDataType,
    { rejectValue: string }
>('books/getBooks', async ({ bookTitle, category, sortValue }, { rejectWithValue }) => {
    try {
        const response = await booksAPI.getBooks(bookTitle, category, sortValue);

        return response.data;
    } catch (e) {
        const err = e as Error;

        return rejectWithValue(`getBooks: ${err.message}`);
    }
});

export default booksSlice.reducer;
