import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { IconType } from 'react-icons';
import { FaBook, FaCamera, FaGamepad } from 'react-icons/fa';
import { addCard } from '../../../redux/slices/cardsSlice';
import { selectCardsByColumn } from '../../../redux/selectors/cardsSelectores';
import { Card } from '../Card/Card';
import { Creator } from '../Creator/Creator';
import styles from './Column.module.scss';

interface Props {
  id: string;
  title: string;
  icon?: string;
}

const Column = ({ id, title, icon }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(selectCardsByColumn(id));
  const iconMap: Record<string, IconType> = {
    FaBook,
    FaCamera,
    FaGamepad,
  };

  const Icon = iconMap[icon || ''];

  return (
    <section className={styles.column}>
      <h3 className={styles.title}>
        {title}
        {Icon && (
          <span className={styles.icon}>
            <Icon className={styles.icon} />
          </span>
        )}
      </h3>
      <div className={styles.shown}>
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
