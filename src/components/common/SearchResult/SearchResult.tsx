import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllColumns } from '../../../redux/selectors/columnsSelector';
import { selectGroupedCardsByColumn } from '../../../redux/selectors/cardsSelectores';
import styles from './SearchResult.module.scss';

interface Props {
  searchString: string;
}

export const SearchResult = ({ searchString }: Props) => {
  const groupedCards = useSelector(selectGroupedCardsByColumn);
  const columns = useSelector(selectAllColumns);
  const filteredColumns = columns.filter(
    (column) => groupedCards[column.id] && groupedCards[column.id].length > 0
  );

  return (
    <div
      className={`${styles.searchResult} ${searchString ? styles.shown : ''}`}
    >
      {filteredColumns.length ? (
        filteredColumns.map((column) => (
          <div key={column.id} className={styles.columnGroup}>
            <h3 className={styles.columnTitle}>{column.title}: </h3>
            <ul className={styles.cardList}>
              {groupedCards[column.id].map((card) => (
                <Link
                  to={`/library/card/${card.id}`}
                  key={card.id}
                  className={styles.cardItem}
                >
                  {card.title}
                </Link>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <h3 className={styles.columnTitle}>No items</h3>
      )}
    </div>
  );
};
