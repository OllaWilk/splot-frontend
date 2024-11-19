import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchString: string;
}

const initialState: SearchState = {
  searchString: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export default searchSlice.reducer;
