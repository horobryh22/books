import React from 'react';

import { Controller, useForm } from 'react-hook-form';

import classes from './Header.module.css';
import { SearchFormValues, SelectItems } from './types';

import { CustomSelect, Input } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchBooks } from 'store';
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

    const category = useTypedSelector(state => state.books.searchValues.category);
    const sorting = useTypedSelector(state => state.books.searchValues.sorting);
    const bookTitle = useTypedSelector(state => state.books.searchValues.bookTitle);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SearchFormValues>({
        defaultValues: {
            bookTitle,
            category,
            sorting,
        },
    });
    const onSubmit = (data: SearchFormValues): void => {
        const { bookTitle, category, sorting } = data;

        dispatch(fetchBooks({ bookTitle, category, sorting, startIndex: 0 }));

        reset();
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
                        <Input
                            {...field}
                            onSubmit={handleSubmit(onSubmit)}
                            error={errors.bookTitle?.type === 'required'}
                        />
                    )}
                />
                <div className={classes.errorDiv}>
                    {errors.bookTitle?.type === 'required' && 'This field is required'}
                </div>
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
