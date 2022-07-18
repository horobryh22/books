import React from 'react';

import { CircularProgress, Grid } from '@mui/material';

import { Book } from 'components/book';
import { BooksTotalCount } from 'components/booksTotalCount';
import { LoadMore } from 'components/loadMore';
import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
};

export const BooksList = (): ReturnComponentType => {
    const books = useTypedSelector(state => state.books.books);
    const isGettingBooks = useTypedSelector(state => state.books.isGettingBooks);
    const totalItems = useTypedSelector(state => state.books.totalItems);

    const mappedBooks =
        books &&
        books.map(book => {
            return (
                <Grid
                    key={book.id}
                    item
                    xs={3}
                    display="flex"
                    justifyContent="center"
                    style={{ marginTop: '30px' }}
                >
                    <Book
                        imageLinks={book.volumeInfo.imageLinks}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        categories={book.volumeInfo.categories}
                    />
                </Grid>
            );
        });

    if (isGettingBooks) {
        return (
            <div style={circleStyle}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            {totalItems && (
                <>
                    <BooksTotalCount totalItems={totalItems} />
                    <Grid container justifyContent="flex-start" item xs={12}>
                        {mappedBooks}
                    </Grid>
                    <LoadMore />
                </>
            )}
        </div>
    );
};
