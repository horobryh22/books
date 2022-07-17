import React from 'react';

import classes from './Header.module.css';
import { SelectItems } from './types';

import { CustomSelect } from 'components/customSelect';
import { Input } from 'components/input';
import { ReturnComponentType } from 'types';

const SELECT_ITEMS: SelectItems = {
    firstSelect: [
        { value: 10, title: 'all', id: 1 },
        { value: 20, title: 'art', id: 2 },
        { value: 30, title: 'biography', id: 3 },
        { value: 40, title: 'computers', id: 4 },
        { value: 50, title: 'history', id: 5 },
        { value: 60, title: 'medical', id: 6 },
        { value: 70, title: 'poetry', id: 7 },
    ],
    secondSelect: [
        { value: 10, title: 'relevance ', id: 8 },
        { value: 20, title: 'newest', id: 9 },
    ],
};

export const Header = (): ReturnComponentType => {
    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Search for books</h1>
            <Input />
            <div>
                <CustomSelect name="Categories" items={SELECT_ITEMS.firstSelect} />
                <CustomSelect name="Sorting by" items={SELECT_ITEMS.secondSelect} />
            </div>
        </div>
    );
};
