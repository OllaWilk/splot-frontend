import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllColumns } from '../../../redux/selectors/columnsSelector';
import { selectGroupedCardsByColumn } from '../../../redux/selectors/cardsSelectores';
import styles from './SearchResult.module.scss';

export const SearchResult = () => {
  const groupedCards = useSelector(selectGroupedCardsByColumn);
  const columns = useSelector(selectAllColumns);
  const filteredColumns = columns.filter(
    (column) => groupedCards[column.id] && groupedCards[column.id].length > 0
  );

  return (
    <div className={styles.searchResult}>
      {filteredColumns.map((column) => (
        <div key={column.id} className={styles.columnGroup}>
          <h3 className={styles.columnTitle}>{column.title}: </h3>
          <ul className={styles.cardList}>
            {groupedCards[column.id].map((card) => (
              <li key={card.id} className={styles.cardItem}>
                {card.title} /
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
