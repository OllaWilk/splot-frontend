import React from 'react';
import styles from './NoDataAlert.module.scss';

interface Props {
  message: string;
}

const NoDataAlert = ({ message }: Props) => (
  <div className={styles.noDataAlert}>
    <h2>{message}</h2>
  </div>
);

export { NoDataAlert };
