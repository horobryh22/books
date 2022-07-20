import React from 'react';

import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { ErrorSnackbar, Header } from 'components';
import { BookPage, BooksListPage } from 'pages';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => {
    return (
        <div>
            <Container fixed>
                <Header />
                <Routes>
                    <Route path="/" element={<BooksListPage />} />
                    <Route path="/:id" element={<BookPage />} />
                </Routes>
                <ErrorSnackbar />
            </Container>
        </div>
    );
};
