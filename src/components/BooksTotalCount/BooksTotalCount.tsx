import React from 'react';

import { ReturnComponentType } from 'types';

const BOOK_COUNT_STYLES = {
    textAlign: 'center' as const,
    marginTop: '20px',
};

export const BooksTotalCount = (): ReturnComponentType => {
    const booksCount = 100;

    return <div style={BOOK_COUNT_STYLES}>{`Found ${booksCount} results`}</div>;
};
