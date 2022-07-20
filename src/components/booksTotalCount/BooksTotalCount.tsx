import React from 'react';

import { BooksTotalCountType } from './types';

import { ReturnComponentType } from 'types';

const BOOK_COUNT_STYLES = {
    textAlign: 'center' as const,
    marginTop: '20px',
};

export const BooksTotalCount = ({
    totalItems,
}: BooksTotalCountType): ReturnComponentType => {
    return <div style={BOOK_COUNT_STYLES}>{`Found ${totalItems} results`}</div>;
};
