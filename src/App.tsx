import React from 'react';

import { Book, Header } from 'components';
import { BooksTotalCount } from 'components/BooksTotalCount';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => {
    return (
        <div>
            <Header />
            <BooksTotalCount />
            <Book />
        </div>
    );
};
