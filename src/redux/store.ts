import { configureStore } from '@reduxjs/toolkit';
import columnsReducer from './slices/columnSlice';
import cardsReducer from './slices/cardsSlice';

export const store = configureStore({
  reducer: {
    columns: columnsReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
