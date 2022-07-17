import React, { useEffect } from 'react';

import { CircularProgress, Grid, Paper } from '@mui/material';

import { Book } from 'components/book';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { getBooks } from 'store/slices/booksSlice/booksSlice';
import { ReturnComponentType } from 'types';

const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
};

export const BooksList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const books = useTypedSelector(state => state.books.books);
    const isGettingBooks = useTypedSelector(state => state.books.isGettingBooks);

    const mappedBooks = books.map(book => {
        return (
            <Grid
                key={book.id}
                item
                xs={3}
                display="flex"
                justifyContent="center"
                style={{ marginTop: '30px' }}
            >
                <Paper elevation={8}>
                    <Book
                        imageLinks={book.volumeInfo.imageLinks}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        categories={book.volumeInfo.categories}
                    />
                </Paper>
            </Grid>
        );
    });

    useEffect(() => {
        dispatch(
            getBooks({ bookTitle: 'flowers', category: 'art', sortValue: 'newest' }),
        );
    }, [dispatch]);

    if (isGettingBooks) {
        return (
            <div style={circleStyle}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <Grid container justifyContent="flex-start" item xs={12}>
            {mappedBooks}
        </Grid>
    );
};
