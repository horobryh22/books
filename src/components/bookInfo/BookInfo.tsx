import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import classes from './BookInfo.module.css';

import { Preloader } from 'components';
import { useAppDispatch, useTypedSelector } from 'hooks';
import {
    fetchBook,
    selectAuthors,
    selectCategories,
    selectDescription,
    selectImage,
    selectIsFetchingSelectedBook,
    selectTitle,
} from 'store';
import { ReturnComponentType } from 'types';

export const BookInfo = React.memo((): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { id: bookId } = useParams();

    const isFetchingSelectedBook = useTypedSelector(selectIsFetchingSelectedBook);

    const title = useTypedSelector(selectTitle);
    const authors = useTypedSelector(selectAuthors);
    const categories = useTypedSelector(selectCategories);
    const image = useTypedSelector(selectImage);
    const description = useTypedSelector(selectDescription);

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
});
