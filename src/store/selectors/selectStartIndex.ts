import { RootState } from 'store/store';

export const selectStartIndex = (state: RootState): number =>
    state.books.searchValues.startIndex;
