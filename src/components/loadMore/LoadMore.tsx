import React, { useCallback } from 'react';

import { Autorenew } from '@mui/icons-material';
import { Button } from '@mui/material';

import classes from './LoadMore.module.css';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { loadMoreBooks, selectStartIndex, selectTotalItems } from 'store';
import { ReturnComponentType } from 'types';

export const LoadMore = React.memo((): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const totalCountBooks = useTypedSelector(selectTotalItems);
    const paginationStep = useTypedSelector(selectStartIndex);

    const disableCondition = totalCountBooks ? totalCountBooks <= paginationStep : false;

    const loadBooks = useCallback((): void => {
        dispatch(loadMoreBooks());
    }, []);

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
});
