import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

//get all Cards
export const selectAllCards = (state: RootState) => state.cards;

// memoize filtered cards

export const selectCardsByColumn = (columnId: string) =>
  createSelector([selectAllCards], (cards) =>
    cards.filter((card) => card.columnId === columnId)
  );
