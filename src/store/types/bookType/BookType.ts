export type BookType = {
    id: string;
    volumeInfo: BookInfoType;
};

export type BookInfoType = {
    authors: string[];
    categories: string[];
    description: string;
    title: string;
    imageLinks: BookImagesType;
};

export type BookImagesType = {
    smallThumbnail: string;
    thumbnail: string;
};
