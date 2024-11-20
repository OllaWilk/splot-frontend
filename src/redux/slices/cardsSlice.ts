import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
}

const initialState: Card[] = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    completed: true,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    completed: false,
  },

  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    completed: false,
  },
  { id: 'card-4', columnId: 'column-2', title: 'Star Wars', completed: true },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    completed: true,
  },
  { id: 'card-6', columnId: 'column-3', title: 'Skyrim', completed: true },
  {
    id: 'card-7',
    columnId: 'column-1',
    title: 'Lord of The Ring',
    completed: true,
  },
  {
    id: 'card-8',
    columnId: 'column-1',
    title: 'Nigdziebądź',
    completed: true,
  },
  {
    id: 'card-9',
    columnId: 'column-2',
    title: 'Dirty Dancing',
    completed: true,
  },
  {
    id: 'card-10',
    columnId: 'column-3',
    title: 'Mass Effect',
    completed: true,
  },
  {
    id: 'card-11',
    columnId: 'column-3',
    title: 'Hogward Legacy',
    completed: false,
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (
      state,
      action: PayloadAction<{
        columnId: string;
        title: string;
        completed?: boolean;
      }>
    ) => {
      state.push({
        id: `card-${Math.random()}`,
        columnId: action.payload.columnId,
        title: action.payload.title,
        completed: action.payload.completed ?? false,
      });
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
