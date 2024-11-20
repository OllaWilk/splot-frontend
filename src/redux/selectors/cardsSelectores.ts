import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSearchString } from './searchSelector';

interface Card {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
}

//get all Cards
export const selectAllCards = (state: RootState) => state.cards as Card[];

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

      return { cards: filteredCards, count: filteredCards.length };
    }
  );
