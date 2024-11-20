import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { IconType } from 'react-icons';
import { FaBook, FaCamera, FaGamepad, FaIcons } from 'react-icons/fa';
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
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const { cards } = useSelector(selectCardsByColumn(id));
  const iconMap: Record<string, IconType> = {
    FaBook,
    FaCamera,
    FaGamepad,
  };

  console.log(search, search.searchString === '');

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
