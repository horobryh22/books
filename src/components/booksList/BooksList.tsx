import React from 'react';

import { Grid } from '@mui/material';

import classes from './BooksList.module.css';

import { Book, BooksTotalCount, LoadMore, Preloader } from 'components';
import { useTypedSelector } from 'hooks';
import {
    selectBooks,
    selectDidUserSearch,
    selectIsGettingBooks,
    selectTotalItems,
} from 'store';
import { ReturnComponentType } from 'types';

export const BooksList = (): ReturnComponentType => {
    const books = useTypedSelector(selectBooks);
    const isGettingBooks = useTypedSelector(selectIsGettingBooks);
    const totalItems = useTypedSelector(selectTotalItems);
    const didUserSearch = useTypedSelector(selectDidUserSearch);

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
                        bookId={book.id}
                        imageLinks={book.volumeInfo.imageLinks}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        categories={book.volumeInfo.categories}
                    />
                </Grid>
            );
        });

    if (isGettingBooks) {
        return <Preloader />;
    }

    return (
        <div>
            {totalItems ? (
                <>
                    <BooksTotalCount totalItems={totalItems} />
                    <Grid container justifyContent="flex-start" item xs={12}>
                        {mappedBooks}
                    </Grid>
                    <LoadMore />
                </>
            ) : (
                didUserSearch && <div className={classes.noFound}>No one match found</div>
            )}
        </div>
    );
};
