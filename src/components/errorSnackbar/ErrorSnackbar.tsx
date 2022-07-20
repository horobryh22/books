import React from 'react';

import Snackbar from '@mui/material/Snackbar';

import { Alert } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setErrorNull } from 'store';
import { selectError } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const ErrorSnackbar = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const error = useTypedSelector(selectError);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorNull(null));
    };

    return (
        <Snackbar
            open={Boolean(error)}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>
    );
};
