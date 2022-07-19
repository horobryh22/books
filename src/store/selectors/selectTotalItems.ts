import { RootState } from 'store/store';
import { Nullable } from 'types';

export const selectTotalItems = (state: RootState): Nullable<number> =>
    state.books.totalItems;
