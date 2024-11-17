import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  columnId: string;
  title: string;
}

const initialState: Card[] = [
  { id: 'card-1', columnId: 'column-1', title: 'This Is Going to Hurt' },
  { id: 'card-2', columnId: 'column-1', title: 'Interpreter of Maladies' },
  { id: 'card-3', columnId: 'column-2', title: 'Harry Potter' },
  { id: 'card-4', columnId: 'column-2', title: 'Star Wars' },
  { id: 'card-5', columnId: 'column-3', title: 'The Witcher' },
  { id: 'card-6', columnId: 'column-3', title: 'Skyrim' },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.push(action.payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
