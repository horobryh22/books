import React from 'react';

import { Autorenew } from '@mui/icons-material';
import { Button } from '@mui/material';

import classes from './LoadMore.module.css';

import { useAppDispatch } from 'hooks';
import { getBooks } from 'store/slices';
import { ReturnComponentType } from 'types';

export const LoadMore = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const loadMoreBooks = (): void => {
        dispatch(getBooks({}));
    };

    return (
        <div className={classes.wrapper}>
            <Button variant="contained" endIcon={<Autorenew />} onClick={loadMoreBooks}>
                Load More
            </Button>
        </div>
    );
};
