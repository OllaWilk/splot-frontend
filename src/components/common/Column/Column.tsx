import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { IconType } from 'react-icons';
import { FaBook, FaCamera, FaGamepad, FaIcons } from 'react-icons/fa';
import { Column as ColumnProps } from '@alexwilk/spacesteps-types';
import { addCard } from '../../../redux/slices/cardsSlice';
import { selectGroupedCardsByColumn } from '../../../redux/selectors/cardsSelectores';
import { Card } from '../Card/Card';
import { Creator } from '../Creator/Creator';
import styles from './Column.module.scss';

const Column = ({ id, title, icon }: ColumnProps) => {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const groupedCards = useSelector(selectGroupedCardsByColumn);
  const cards = groupedCards[id] || [];
  const iconMap: Record<string, IconType> = {
    FaBook,
    FaCamera,
    FaGamepad,
  };
  const Icon = iconMap[icon || ''];
  const [toggle, setToggle] = useState(false);

  return (
    <section className={styles.column}>
      <h3 className={styles.title} onClick={() => setToggle(!toggle)}>
        {Icon ? <Icon /> : <FaIcons />}
        {title}
      </h3>
      <div
        className={`${styles.cardWrap} ${
          search.searchString === ''
            ? toggle
              ? styles.buttonsShown
              : ''
            : styles.buttonsShown
        }`}
      >
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
        <Creator
          text={'Add new card'}
          action={(title) => {
            dispatch(
              addCard({
                columnId: id,
                title,
              })
            );
          }}
        />
      </div>
    </section>
  );
};

export { Column };
