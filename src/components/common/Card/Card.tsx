import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';

import styles from './Card.module.scss';

interface Props {
  title: string;
  id: string;
}

export const Card = ({ title, id }: Props) => {
  return (
    <Link to={`/library/card/${id}`} className={styles.card}>
      <h3 className={styles.titleCard}> {title}</h3>
      <span className={styles.deleteIcon}>
        <MdEdit />
      </span>
    </Link>
  );
};
