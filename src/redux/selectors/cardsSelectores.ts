import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSearchString } from './searchSelector';

interface Card {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
}

export const selectAllCards = (state: RootState) => state.cards;

export const selectFilteredCards = createSelector(
  [selectAllCards, selectSearchString],
  (cards, searchString) => {
    return cards.filter((card: Card) =>
      new RegExp(searchString, 'i').test(card.title)
    );
  }
);

// memoize filtered cards
export const selectCardsByColumn = (columnId: string) =>
  createSelector([selectFilteredCards], (filteredCards) => {
    const cardsInColumn = filteredCards.filter(
      (card: Card) => card.columnId === columnId
    );

    return { cards: cardsInColumn, count: cardsInColumn.length };
  });
