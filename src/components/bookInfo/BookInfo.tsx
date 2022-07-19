import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import classes from './BookInfo.module.css';

import { Preloader } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchBook } from 'store';
import { ReturnComponentType } from 'types';

export const BookInfo = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { id: bookId } = useParams();

    const isFetchingSelectedBook = useTypedSelector(
        state => state.books.isFetchingSelectedBook,
    );

    const title = useTypedSelector(state => state.books.selectedBook.volumeInfo.title);
    const authors = useTypedSelector(
        state => state.books.selectedBook.volumeInfo.authors,
    );
    const categories = useTypedSelector(
        state => state.books.selectedBook.volumeInfo.categories,
    );
    const image = useTypedSelector(
        state => state.books.selectedBook.volumeInfo.imageLinks.thumbnail,
    );
    const description = useTypedSelector(
        state => state.books.selectedBook.volumeInfo.description,
    );

    useEffect(() => {
        if (bookId) {
            dispatch(fetchBook(bookId));
        }
    }, [bookId]);

    if (isFetchingSelectedBook) {
        return <Preloader />;
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.image}>
                <img src={`${image}`} alt="bookImage" />
            </div>
            <div className={classes.info}>
                <span className={classes.categories}>
                    {categories && categories.join('/')}
                </span>
                <h3>{title}</h3>
                <span className={classes.authors}>{authors && authors.join(', ')}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};
