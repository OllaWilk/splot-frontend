import { RootState } from '../store';

export const selectSearchString = (state: RootState) =>
  state.search.searchString;
