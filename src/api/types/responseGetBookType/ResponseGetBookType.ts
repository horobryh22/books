import { BookInfoType } from 'store/types';

export type ResponseGetBookType = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: BookInfoType;
};
