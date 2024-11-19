import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSearchString } from './searchSelector';

//get all Cards
export const selectAllCards = (state: RootState) => state.cards;

//export const countAllCards

// memoize filtered cards
export const selectCardsByColumn = (columnId: string) =>
  createSelector(
    [selectAllCards, selectSearchString],
    (cards, searchString) => {
      const filteredCards = cards.filter(
        (card) =>
          card.columnId === columnId &&
          new RegExp(searchString, 'i').test(card.title)
      );

      return filteredCards;
    }
  );
