import React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { BookPropsType } from './types';

import { ReturnComponentType } from 'types';

export const Book: React.FC<BookPropsType> = ({
    bookId,
    imageLinks,
    title,
    categories,
    authors,
}): ReturnComponentType => {
    return (
        <Card sx={{ width: 270 }} elevation={10}>
            <CardActionArea>
                <NavLink to={`/${bookId}`}>
                    <CardMedia
                        component="img"
                        height="250px"
                        style={{ width: '200px', margin: '0 auto' }}
                        src={`${imageLinks?.thumbnail}`}
                        alt="book title"
                    />
                </NavLink>
                <CardContent style={{ height: '100%' }}>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {categories && categories[0]}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        fontWeight="bold"
                    >
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">
                        {authors && authors.join(', ')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
