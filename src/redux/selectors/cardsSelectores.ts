import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSearchString } from './searchSelector';

interface Card {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
  description?: string;
  author?: string;
  year?: number;
  purcheseLink?: string;
  notes?: string;
}

export const selectAllCards = (state: RootState) => state.cards;

export const selectFilteredCards = createSelector(
  [selectAllCards, selectSearchString],
  (cards, searchString) => {
    if (!searchString.trim()) return cards;
    return cards.filter((card: Card) =>
      new RegExp(searchString, 'i').test(card.title)
    );
  }
);

export const selectGroupedCardsByColumn = createSelector(
  [selectFilteredCards],
  (filteredCards) => {
    return filteredCards.reduce<Record<string, Card[]>>((acc, card) => {
      if (!acc[card.columnId]) {
        acc[card.columnId] = [];
      }
      acc[card.columnId].push(card);
      return acc;
    }, {});
  }
);

export const selectCardById = createSelector(
  [selectAllCards, (_, cardId: string) => cardId],
  (cards, cardId) => cards.find((card) => card.id === cardId) || null
);
