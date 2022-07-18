import React from 'react';

import { Container } from '@mui/material';

import { Header } from 'components';
import { BooksList } from 'components/booksList';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => {
    return (
        <div>
            <Container fixed>
                <Header />
                <BooksList />
            </Container>
        </div>
    );
};
