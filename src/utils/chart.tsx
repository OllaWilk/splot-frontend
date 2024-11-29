import { Column, ChartData, CardBase, Card } from '@alexwilk/spacesteps-types';

export const getChartDataBase = (
  columns: Column[],
  cards: Card[]
): ChartData[] =>
  columns.map((column) => {
    const columnCards = cards.filter((card) => card.columnId === column.id);
    return {
      title: column.title,
      completed: columnCards.filter((card) => card.completed).length,
      incomplete: columnCards.filter((card) => !card.completed).length,
    };
  });

export const tickFormatter = (
  title: string,
  columns: Column[],
  cards: CardBase[]
): string => {
  const column = columns.find((col) => title === col.title);
  const cardCount = cards.filter((card) => card.columnId === column?.id).length;
  return `${title} (${cardCount} elements)`;
};
