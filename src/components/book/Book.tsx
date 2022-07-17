import React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { BookPropsType } from 'components/types';
import { ReturnComponentType } from 'types';

export const Book: React.FC<BookPropsType> = ({
    imageLinks,
    title,
    categories,
    authors,
}): ReturnComponentType => {
    return (
        <Card
            sx={{ maxWidth: 270 }}
            style={{ backgroundColor: 'rgba(6, 58, 187, 0.42)' }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={`${imageLinks.smallThumbnail}`}
                    alt="green iguana"
                />
                <CardContent>
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
