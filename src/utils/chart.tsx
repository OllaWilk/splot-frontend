interface ChartData {
  title: string;
  completed: number;
  incomplete: number;
}

interface Column {
  id: string;
  title: string;
  icon?: string;
}

interface Card {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
}

export const getChartData = (columns: Column[], cards: Card[]): ChartData[] =>
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
  cards: Card[]
): string => {
  const column = columns.find((col) => title === col.title);
  const cardCount = cards.filter((card) => card.columnId === column?.id).length;
  return `${title} (${cardCount} elements)`;
};
