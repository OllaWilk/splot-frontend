import React from 'react';
import { FaBook, FaCamera, FaGamepad } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Column } from '../Column/Column';
import styles from './List.module.scss';

interface Card {
  key: number;
  title: string;
}

interface ColumnData {
  key: number;
  id?: string;
  title: string;
  icon?: IconType;
  cards: Card[];
}

export const List = () => {
  const columns: ColumnData[] = [
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
      icon: FaCamera,
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
      icon: FaGamepad,
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
      {columns.map(({ key, ...columnData }) => (
        <Column key={key} {...columnData} />
      ))}
    </section>
  );
};
