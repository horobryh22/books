import React from 'react';

import { Controller, useForm } from 'react-hook-form';

import classes from './Header.module.css';
import { SearchFormValues, SelectItems } from './types';

import { CustomSelect } from 'components/customSelect';
import { Input } from 'components/input';
import { useAppDispatch } from 'hooks';
import { getBooks } from 'store/slices';
import { ReturnComponentType } from 'types';

const SELECT_ITEMS: SelectItems = {
    firstSelect: [
        { value: ' ', title: 'all', id: 1 },
        { value: 'art', title: 'art', id: 2 },
        { value: 'biography', title: 'biography', id: 3 },
        { value: 'computers', title: 'computers', id: 4 },
        { value: 'history', title: 'history', id: 5 },
        { value: 'medical', title: 'medical', id: 6 },
        { value: 'poetry', title: 'poetry', id: 7 },
    ],
    secondSelect: [
        { value: 'relevance', title: 'relevance', id: 8 },
        { value: 'newest', title: 'newest', id: 9 },
    ],
};

export const Header = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const { control, handleSubmit } = useForm<SearchFormValues>({
        defaultValues: {
            bookTitle: '',
            category: ' ',
            sorting: 'relevance',
        },
    });
    const onSubmit = (data: SearchFormValues): void => {
        const { bookTitle, category, sorting } = data;

        dispatch(getBooks({ bookTitle, category, sorting }));
    };

    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Search for books</h1>
            <form className={classes.form}>
                <Controller
                    name="bookTitle"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input {...field} onSubmit={handleSubmit(onSubmit)} />
                    )}
                />
                <div>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <CustomSelect
                                {...field}
                                items={SELECT_ITEMS.firstSelect}
                                name="Categories"
                            />
                        )}
                    />
                    <Controller
                        name="sorting"
                        control={control}
                        render={({ field }) => (
                            <CustomSelect
                                {...field}
                                items={SELECT_ITEMS.secondSelect}
                                name="Sorting by"
                            />
                        )}
                    />
                </div>
            </form>
        </div>
    );
};
