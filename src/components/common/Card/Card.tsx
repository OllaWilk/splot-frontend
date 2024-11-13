import React from 'react';
import styles from './Card.module.scss';

interface Props {
  title: string;
}

export const Card = ({ title }: Props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.titleCard}> {title}</h3>
      <span className={styles.deleteIcon}>X</span>
    </div>
  );
};
