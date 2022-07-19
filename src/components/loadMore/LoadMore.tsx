import React from 'react';

import { Autorenew } from '@mui/icons-material';
import { Button } from '@mui/material';

import classes from './LoadMore.module.css';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchBooks } from 'store';
import { ReturnComponentType } from 'types';

export const LoadMore = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const category = useTypedSelector(state => state.books.searchValues.category);
    const sorting = useTypedSelector(state => state.books.searchValues.sorting);
    const bookTitle = useTypedSelector(state => state.books.searchValues.bookTitle);
    const startIndex = useTypedSelector(state => state.books.searchValues.startIndex);

    const loadMoreBooks = (): void => {
        dispatch(fetchBooks({ bookTitle, category, startIndex, sorting }));
    };

    return (
        <div className={classes.wrapper}>
            <Button variant="contained" endIcon={<Autorenew />} onClick={loadMoreBooks}>
                Load More
            </Button>
        </div>
    );
};
