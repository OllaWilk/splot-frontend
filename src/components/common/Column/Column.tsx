import React from 'react';
import { IconType } from 'react-icons';
import { Card } from '../Card/Card';
import styles from './Column.module.scss';

interface CardData {
  key: number;
  title: string;
}

interface Props {
  title: string;
  icon?: IconType;
  cards: CardData[];
}

const Column = ({ title, cards, icon: Icon }: Props) => (
  <section className={styles.column}>
    <h3 className={styles.title}>
      {title}
      {Icon && (
        <span className={styles.icon}>
          <Icon className={styles.icon} />
        </span>
      )}
    </h3>
    {cards.map(({ key, ...cardData }) => (
      <Card key={key} {...cardData} />
    ))}
  </section>
);

export { Column };
