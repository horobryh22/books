import React from 'react';

import { Autorenew } from '@mui/icons-material';
import { Button } from '@mui/material';

import classes from './LoadMore.module.css';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { loadMoreBooks } from 'store';
import { ReturnComponentType } from 'types';

export const LoadMore = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const totalCountBooks = useTypedSelector(state => state.books.totalItems);
    const paginationStep = useTypedSelector(state => state.books.searchValues.startIndex);

    const disableCondition = totalCountBooks ? totalCountBooks <= paginationStep : false;

    const loadBooks = (): void => {
        dispatch(loadMoreBooks());
    };

    return (
        <div className={classes.wrapper}>
            <Button
                disabled={disableCondition}
                variant="contained"
                endIcon={<Autorenew />}
                onClick={loadBooks}
            >
                Load More
            </Button>
        </div>
    );
};
