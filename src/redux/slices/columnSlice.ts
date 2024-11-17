import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Column {
  id: string;
  title: string;
  icon?: string;
}

const initialState: Column[] = [
  {
    id: 'column-1',
    title: 'Books',
    icon: 'FaBook',
  },
  {
    id: 'column-2',
    title: 'Movies',
    icon: 'FaCamera',
  },
  {
    id: 'column-3',
    title: 'Games',
    icon: 'FaGamepad',
  },
];

//Slice

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<Column>) => {
      state.push(action.payload);
    },
  },
});

export const { addColumn } = columnsSlice.actions;
export default columnsSlice.reducer;
