import React from 'react';

import { CircularProgress } from '@mui/material';

import { ReturnComponentType } from 'types';

const CIRCLE_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
};

export const Preloader = (): ReturnComponentType => {
    return (
        <div style={CIRCLE_STYLE}>
            <CircularProgress />
        </div>
    );
};
