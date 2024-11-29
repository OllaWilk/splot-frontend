import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSearchString } from './searchSelector';
import { CardBase } from '@alexwilk/spacesteps-types';

export const selectAllCards = (state: RootState) => state.cards;

export const selectCardsAsBase = createSelector([selectAllCards], (cards) =>
  cards.map((card) => ({
    id: card.id,
    columnId: card.columnId,
    title: card.title,
    completed: card.completed,
  }))
);

export const selectFilteredCards = createSelector(
  [selectCardsAsBase, selectSearchString],
  (cards, searchString) => {
    if (!searchString.trim()) return cards;
    return cards.filter((card: CardBase) =>
      new RegExp(searchString, 'i').test(card.title)
    );
  }
);

export const selectGroupedCardsByColumn = createSelector(
  [selectFilteredCards],
  (filteredCards) => {
    return filteredCards.reduce<Record<string, CardBase[]>>((acc, card) => {
      if (!acc[card.columnId]) {
        acc[card.columnId] = [];
      }
      acc[card.columnId].push(card);
      return acc;
    }, {});
  }
);

export const selectCardById = createSelector(
  [selectAllCards, (_, cardId: string | null | undefined) => cardId],
  (cards, cardId) => {
    if (!cardId) return null;
    return cards.find((card) => card.id === cardId) || null;
  }
);
