import React from 'react';
import styles from './ButtonAddEvent.module.scss';

type Props = {
  toggleIsOpen: () => void;
};

export const ButtonAddEvent = ({ toggleIsOpen }: Props) => {
  return (
    <button className={styles.addEvent} onClick={toggleIsOpen}>
      + Add event
    </button>
  );
};
