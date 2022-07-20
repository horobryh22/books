import { RootState } from 'store/store';
import { Nullable } from 'types';

export const selectError = (state: RootState): Nullable<string> => state.books.error;
