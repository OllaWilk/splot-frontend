import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllColumns } from '../../../redux/selectors/columnsSelector';
import { selectGroupedCardsByColumn } from '../../../redux/selectors/cardsSelectores';
import styles from './SearchResult.module.scss';

export const SearchResult = () => {
  const groupedCards = useSelector(selectGroupedCardsByColumn);
  const columns = useSelector(selectAllColumns);

  return (
    <div className={styles.searchResult}>
      {columns.map((column) => {
        const cards = groupedCards[column.id] || [];

        if (cards.length === 0) return null;

        return (
          <div key={column.id} className={styles.columnGroup}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.cardList}>
              {cards.map((card) => (
                <li key={card.id} className={styles.cardItem}>
                  {card.title}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
