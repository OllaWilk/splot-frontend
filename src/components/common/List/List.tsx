import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { addColumn } from '../../../redux/slices/columnSlice';
import { Creator } from '../Creator/Creator';
import { Column } from '../Column/Column';
import styles from './List.module.scss';

export const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const columns = useSelector((state: RootState) => state.columns);

  const handleAddColumn = (title: string) => {
    dispatch(
      addColumn({
        id: `card-${Math.random()}`,
        title,
      })
    );
  };

  return (
    <section className={styles.list}>
      <div className={styles.creator}>
        <Creator text={'Add new column'} action={handleAddColumn} />
      </div>
      <div className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
    </section>
  );
};
