import React from 'react';
import styles from './List.module.scss';
import { FaBook } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Card {
  key: number;
  title: string;
}

interface Column {
  key: number;
  id?: string;
  title: string;
  icon?: IconType;
  cards: Card[];
}

export const List = () => {
  const columns: Column[] = [
    {
      key: 0,
      title: 'Books',
      icon: FaBook,
      cards: [
        {
          key: 10,
          title: 'This Is Going to Hurt',
        },
        {
          key: 11,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      cards: [
        {
          key: 11,
          title: 'Harry Potter',
        },
        {
          key: 2111,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      cards: [
        {
          key: 210,
          title: 'The Witcher',
        },
        {
          key: 2221,
          title: 'Skyrim',
        },
        {
          key: 2521,
          title: 'Skyrim',
        },
      ],
    },
  ];

  return (
    <section className={styles.list}>
      <div className={styles.columns}>
        {columns.map((columnData) => (
          <section key={columnData.id} className={styles.column}>
            <h3 className={styles.title}>{columnData.title}</h3>
            <div>
              {columnData.cards.map((cardData) => (
                <div className={styles.card} key={cardData.title}>
                  <h3 className={styles.titleCard}> {cardData.title}</h3>
                  <span className={styles.deleteIcon}>X</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
