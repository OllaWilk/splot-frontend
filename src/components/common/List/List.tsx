import React, { useState } from 'react';
import { FaBook, FaCamera, FaGamepad, FaListAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Creator } from '../Creator/Creator';
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
  const [columns, setColumns] = useState<ColumnData[]>([
    {
      key: 0,
      title: 'Books',
      icon: FaBook,
      cards: [
        { key: 10, title: 'This Is Going to Hurt' },
        { key: 11, title: 'Interpreter of Maladies' },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: FaCamera,
      cards: [
        { key: 12, title: 'Harry Potter' },
        { key: 13, title: 'Star Wars' },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: FaGamepad,
      cards: [
        { key: 14, title: 'The Witcher' },
        { key: 15, title: 'Skyrim' },
      ],
    },
  ]);

  const addColumn = (title: string) => {
    const newColumn = {
      key: columns.length ? columns[columns.length - 1].key + 1 : 0,
      title,
      icon: FaListAlt,
      cards: [],
    };

    setColumns([...columns, newColumn]);
  };

  return (
    <section className={styles.list}>
      <div className={styles.creator}>
        <Creator text={'Add new column'} action={addColumn} />
      </div>
      <div className={styles.columns}>
        {columns.map(({ key, ...columnData }) => (
          <Column key={key} {...columnData} />
        ))}
      </div>
    </section>
  );
};
