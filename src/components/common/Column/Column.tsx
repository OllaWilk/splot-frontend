import React, { useCallback, useState } from 'react';
import { IconType } from 'react-icons';
import { Card } from '../Card/Card';
import { Creator } from '../Creator/Creator';
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

const Column = ({ title, cards, icon: Icon }: Props) => {
  const [card, setCard] = useState<CardData[]>(cards);
  const [toggle, setToggle] = useState(false);

  const addCard = useCallback(
    (title: string) => {
      console.log('dodaj karte');
      const newCard = {
        key: card.length ? card[card.length - 1].key + 1 : 0,
        title,
      };

      setCard([...card, newCard]);
    },
    [card]
  );

  return (
    <section className={styles.column}>
      <h3 className={styles.title} onClick={() => setToggle(!toggle)}>
        {title}
        {Icon && (
          <span className={styles.icon}>
            <Icon className={styles.icon} />
          </span>
        )}
      </h3>
      <div
        className={`${styles.cardWrap} + ${toggle ? styles.buttonsShown : ''}`}
      >
        {card.map(({ key, ...card }) => (
          <Card key={key} {...card} />
        ))}
        <Creator text={'Add new card'} action={addCard} />
      </div>
    </section>
  );
};

export { Column };
